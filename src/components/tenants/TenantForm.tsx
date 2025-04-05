
import { useState, useEffect } from "react";
import { Tenant, Residence, Apartment } from "@/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DialogFooter } from "@/components/ui/dialog";

interface TenantFormProps {
  initialData?: Tenant;
  residences: Residence[];
  apartments: Apartment[];
  onSubmit: (formData: Partial<Tenant>) => void;
  onCancel: () => void;
}

const TenantForm = ({ 
  initialData, 
  residences, 
  apartments, 
  onSubmit, 
  onCancel 
}: TenantFormProps) => {
  const [formData, setFormData] = useState<Partial<Tenant>>(
    initialData || {
      type: "individual",
      title: "",
      first_name: "",
      last_name: "",
      company_name: "",
      address: "",
      email: "",
      phone: "",
      portal_language: "fr",
      id_number: "",
      diplomatic_clause: false,
      lease_duration: 12,
      duration_type: "months"
    }
  );

  // Filter apartments based on selected residence
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>([]);
  
  useEffect(() => {
    if (formData.residence_id) {
      setFilteredApartments(
        apartments.filter(apt => apt.residence_id === formData.residence_id)
      );
    } else {
      setFilteredApartments([]);
    }
  }, [formData.residence_id, apartments]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear apartment selection when residence changes
    if (name === "residence_id") {
      setFormData(prev => ({ ...prev, apartment_id: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Tenant Type</Label>
          <RadioGroup
            value={formData.type}
            onValueChange={(value) => handleSelectChange("type", value)}
            className="flex space-x-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="individual" id="individual" />
              <Label htmlFor="individual" className="cursor-pointer">Individual</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="company" id="company" />
              <Label htmlFor="company" className="cursor-pointer">Company</Label>
            </div>
          </RadioGroup>
        </div>
        
        <Tabs defaultValue={formData.type} value={formData.type}>
          <TabsContent value="individual" className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Select
                  value={formData.title || ""}
                  onValueChange={(value) => handleSelectChange("title", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M.">M.</SelectItem>
                    <SelectItem value="Mme">Mme</SelectItem>
                    <SelectItem value="Mlle">Mlle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="first_name">First Name</Label>
                <Input
                  id="first_name"
                  name="first_name"
                  value={formData.first_name || ""}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="last_name">Last Name</Label>
                <Input
                  id="last_name"
                  name="last_name"
                  value={formData.last_name || ""}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="id_number">ID / Passport Number</Label>
              <Input
                id="id_number"
                name="id_number"
                value={formData.id_number || ""}
                onChange={handleChange}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="company" className="space-y-4">
            <div>
              <Label htmlFor="company_name">Company Name</Label>
              <Input
                id="company_name"
                name="company_name"
                value={formData.company_name || ""}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <Label htmlFor="id_number">Business ID / Registration Number</Label>
              <Input
                id="id_number"
                name="id_number"
                value={formData.id_number || ""}
                onChange={handleChange}
              />
            </div>
          </TabsContent>
        </Tabs>
        
        <div>
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            value={formData.address || ""}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="portal_language">Portal Language</Label>
          <Select
            value={formData.portal_language || "fr"}
            onValueChange={(value) => handleSelectChange("portal_language", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="border-t pt-6">
        <h3 className="font-medium text-lg mb-4">Residence & Lease Information</h3>
        
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="residence_id">Residence</Label>
              <Select
                value={formData.residence_id || ""}
                onValueChange={(value) => handleSelectChange("residence_id", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select residence" />
                </SelectTrigger>
                <SelectContent>
                  {residences.map((residence) => (
                    <SelectItem key={residence.id} value={residence.id}>
                      {residence.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="apartment_id">Apartment</Label>
              <Select
                value={formData.apartment_id || ""}
                onValueChange={(value) => handleSelectChange("apartment_id", value)}
                disabled={!formData.residence_id || filteredApartments.length === 0}
              >
                <SelectTrigger>
                  <SelectValue placeholder={
                    !formData.residence_id 
                      ? "Select a residence first" 
                      : filteredApartments.length === 0 
                        ? "No apartments available" 
                        : "Select apartment"
                  } />
                </SelectTrigger>
                <SelectContent>
                  {filteredApartments.map((apartment) => (
                    <SelectItem key={apartment.id} value={apartment.id}>
                      {apartment.lot_number} - {apartment.type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lease_start">Lease Start Date</Label>
              <Input
                id="lease_start"
                name="lease_start"
                type="date"
                value={formData.lease_start || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="lease_end">Lease End Date</Label>
              <Input
                id="lease_end"
                name="lease_end"
                type="date"
                value={formData.lease_end || ""}
                onChange={handleChange}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="lease_duration">Lease Duration</Label>
              <Input
                id="lease_duration"
                name="lease_duration"
                type="number"
                min="1"
                value={formData.lease_duration || ""}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label htmlFor="duration_type">Duration Type</Label>
              <Select
                value={formData.duration_type || "months"}
                onValueChange={(value) => handleSelectChange("duration_type", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select duration type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="months">Months</SelectItem>
                  <SelectItem value="years">Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 mt-2">
            <Checkbox
              id="diplomatic_clause"
              name="diplomatic_clause"
              checked={formData.diplomatic_clause || false}
              onCheckedChange={(checked) => {
                setFormData({
                  ...formData,
                  diplomatic_clause: checked as boolean
                });
              }}
            />
            <Label htmlFor="diplomatic_clause" className="cursor-pointer">
              Diplomatic Clause
            </Label>
          </div>
        </div>
      </div>
      
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {initialData ? "Update Tenant" : "Create Tenant"}
        </Button>
      </DialogFooter>
    </form>
  );
};

export default TenantForm;
