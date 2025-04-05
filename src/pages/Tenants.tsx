
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Tenant, Residence, Apartment } from "@/types";
import TenantForm from "@/components/tenants/TenantForm";
import TenantCard from "@/components/tenants/TenantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Download,
  Filter,
  Plus,
  Search,
  ArrowUpDown,
} from "lucide-react";

const Tenants = () => {
  const { toast } = useToast();
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [residences, setResidences] = useState<Residence[]>([]);
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingTenant, setEditingTenant] = useState<Tenant | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch tenants, residences and apartments
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch tenants
      const { data: tenantsData, error: tenantsError } = await supabase
        .from("tenants")
        .select("*");
      
      if (tenantsError) throw tenantsError;
      setTenants(tenantsData || []);

      // Fetch residences
      const { data: residencesData, error: residencesError } = await supabase
        .from("residences")
        .select("*");
      
      if (residencesError) throw residencesError;
      setResidences(residencesData || []);

      // Fetch apartments
      const { data: apartmentsData, error: apartmentsError } = await supabase
        .from("apartments")
        .select("*");
      
      if (apartmentsError) throw apartmentsError;
      setApartments(apartmentsData || []);

    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "Failed to load data. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = () => {
    setEditingTenant(null);
    setShowForm(true);
  };

  const handleEdit = (tenant: Tenant) => {
    setEditingTenant(tenant);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase.from("tenants").delete().eq("id", id);
      
      if (error) throw error;
      
      setTenants(tenants.filter(tenant => tenant.id !== id));
      toast({
        title: "Tenant deleted",
        description: "The tenant has been deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting tenant:", error);
      toast({
        title: "Error",
        description: "Failed to delete tenant. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleFormSubmit = async (formData: Partial<Tenant>) => {
    try {
      if (editingTenant) {
        // Update existing tenant
        const { data, error } = await supabase
          .from("tenants")
          .update(formData)
          .eq("id", editingTenant.id)
          .select();
        
        if (error) throw error;
        
        setTenants(tenants.map(t => t.id === editingTenant.id ? data[0] : t));
        toast({
          title: "Tenant updated",
          description: "The tenant information has been updated successfully.",
        });
      } else {
        // Create new tenant
        const { data, error } = await supabase
          .from("tenants")
          .insert(formData)
          .select();
        
        if (error) throw error;
        
        setTenants([...tenants, data[0]]);
        toast({
          title: "Tenant created",
          description: "The new tenant has been created successfully.",
        });
      }
      
      setShowForm(false);
      setEditingTenant(null);
    } catch (error) {
      console.error("Error saving tenant:", error);
      toast({
        title: "Error",
        description: "Failed to save tenant information. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Filter tenants based on search query
  const filteredTenants = tenants.filter(tenant => {
    const searchFields = [
      tenant.first_name,
      tenant.last_name,
      tenant.company_name,
      tenant.email,
      tenant.phone,
      tenant.address
    ].filter(Boolean).join(" ").toLowerCase();
    
    return searchFields.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Tenants</h1>
          <p className="text-gray-500 mt-1">Manage tenant profiles and their lease information.</p>
        </div>
        
        <Button onClick={handleCreate}>
          <Plus size={16} className="mr-2" />
          Add Tenant
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex items-center flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search tenants..." 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-1" /> Filters
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown size={16} className="mr-1" /> Sort
          </Button>
          <Button variant="outline" size="sm">
            <Download size={16} className="mr-1" /> Export
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <p className="text-gray-500">Loading tenants...</p>
        </div>
      ) : filteredTenants.length === 0 ? (
        <div className="border rounded-md p-8 text-center">
          <h3 className="font-medium text-lg">No tenants found</h3>
          <p className="text-gray-500 mt-1">
            {searchQuery ? "Try a different search term or" : "Get started by"} adding a new tenant.
          </p>
          <Button onClick={handleCreate} className="mt-4">
            <Plus size={16} className="mr-2" />
            Add Tenant
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTenants.map((tenant) => (
            <TenantCard
              key={tenant.id}
              tenant={tenant}
              residence={residences.find(r => r.id === tenant.residence_id)}
              apartment={apartments.find(a => a.id === tenant.apartment_id)}
              onEdit={() => handleEdit(tenant)}
              onDelete={() => handleDelete(tenant.id)}
            />
          ))}
        </div>
      )}
      
      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingTenant ? "Edit Tenant" : "Add New Tenant"}</DialogTitle>
            <DialogDescription>
              {editingTenant 
                ? "Update tenant information and lease details."
                : "Add a new tenant to the system with their contact and lease information."}
            </DialogDescription>
          </DialogHeader>
          <TenantForm
            initialData={editingTenant || undefined}
            residences={residences}
            apartments={apartments}
            onSubmit={handleFormSubmit}
            onCancel={() => setShowForm(false)}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Tenants;
