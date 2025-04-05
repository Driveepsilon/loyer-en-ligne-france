
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Building,
  Filter,
  ArrowUpDown,
  Download
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface Residence {
  id: string;
  name: string;
  address: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
  website?: string;
  services: string[];
  apartmentTypes: string[];
  rentRange: {
    min: number;
    max: number;
  };
}

const ResidenceCard = ({ residence, onEdit, onDelete }: { residence: Residence, onEdit: (id: string) => void, onDelete: (id: string) => void }) => {
  return (
    <Card className="overflow-hidden animate-fade-in">
      <div className="h-40 bg-gray-200 flex items-center justify-center">
        <Building size={48} className="text-gray-400" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{residence.name}</h3>
        <div className="text-sm text-gray-500 mt-1">
          <p>{residence.address}</p>
          <p>{residence.postalCode} {residence.city}</p>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {residence.apartmentTypes.map((type, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">
              {type}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            <span className="font-medium">Loyer:</span> {residence.rentRange.min}€ - {residence.rentRange.max}€
          </p>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" size="sm" onClick={() => onEdit(residence.id)}>
            <Edit size={16} className="mr-1" /> Modifier
          </Button>
          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700" onClick={() => onDelete(residence.id)}>
            <Trash2 size={16} className="mr-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

const ResidenceForm = ({ onClose, initialData }: { onClose: () => void, initialData?: Residence }) => {
  const { toast } = useToast();
  const isEdit = !!initialData;
  
  const [formData, setFormData] = useState<Partial<Residence>>(
    initialData || {
      name: "",
      address: "",
      postalCode: "",
      city: "",
      phone: "",
      email: "",
      website: "",
      services: [],
      apartmentTypes: [],
      rentRange: {
        min: 0,
        max: 0
      }
    }
  );
  
  const apartmentTypeOptions = ["F2", "F3", "F4", "F5", "Duplex", "Penthouse"];
  const serviceOptions = [
    "Chambres et séjours climatisés",
    "Cuisines équipées",
    "Salle de sport",
    "Groupe électrogène",
    "Bâche à eau",
    "Ascenseur et monte-charge",
    "Parking",
    "Piscine",
    "Syndic sur site",
    "Vidéosurveillance",
    "Conciergerie",
    "Service de nettoyage",
    "Gardiennage",
    "Fibre optique"
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.address || !formData.postalCode || !formData.city) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }
    
    // Simuler un enregistrement
    setTimeout(() => {
      toast({
        title: isEdit ? "Résidence mise à jour" : "Résidence créée",
        description: `La résidence ${formData.name} a été ${isEdit ? 'mise à jour' : 'créée'} avec succès.`,
      });
      onClose();
    }, 500);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === "min" || name === "max") {
      setFormData({
        ...formData,
        rentRange: {
          ...formData.rentRange!,
          [name]: parseInt(value) || 0
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const toggleApartmentType = (type: string) => {
    const currentTypes = formData.apartmentTypes || [];
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter(t => t !== type)
      : [...currentTypes, type];
    
    setFormData({
      ...formData,
      apartmentTypes: newTypes
    });
  };
  
  const toggleService = (service: string) => {
    const currentServices = formData.services || [];
    const newServices = currentServices.includes(service)
      ? currentServices.filter(s => s !== service)
      : [...currentServices, service];
    
    setFormData({
      ...formData,
      services: newServices
    });
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Nom de la résidence*</Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div>
          <Label htmlFor="address">Adresse*</Label>
          <Input 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="postalCode">Code postal*</Label>
            <Input 
              id="postalCode" 
              name="postalCode" 
              value={formData.postalCode} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <Label htmlFor="city">Ville*</Label>
            <Input 
              id="city" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone">Téléphone</Label>
            <Input 
              id="phone" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="website">Site web</Label>
          <Input 
            id="website" 
            name="website" 
            value={formData.website} 
            onChange={handleChange} 
          />
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="min">Loyer minimum (€)</Label>
            <Input 
              id="min" 
              name="min" 
              type="number" 
              value={formData.rentRange?.min || ""} 
              onChange={handleChange} 
            />
          </div>
          <div>
            <Label htmlFor="max">Loyer maximum (€)</Label>
            <Input 
              id="max" 
              name="max" 
              type="number" 
              value={formData.rentRange?.max || ""} 
              onChange={handleChange} 
            />
          </div>
        </div>
        
        <div>
          <Label className="block mb-2">Types d'appartements</Label>
          <div className="grid grid-cols-3 gap-3">
            {apartmentTypeOptions.map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox 
                  id={`type-${type}`} 
                  checked={(formData.apartmentTypes || []).includes(type)} 
                  onCheckedChange={() => toggleApartmentType(type)} 
                />
                <label htmlFor={`type-${type}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {type}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <Label className="block mb-2">Services collectifs</Label>
          <div className="grid grid-cols-2 gap-2">
            {serviceOptions.map((service) => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox 
                  id={`service-${service}`} 
                  checked={(formData.services || []).includes(service)} 
                  onCheckedChange={() => toggleService(service)} 
                />
                <label htmlFor={`service-${service}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700">
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <DialogFooter>
        <Button type="button" variant="outline" onClick={onClose}>
          Annuler
        </Button>
        <Button type="submit">
          {isEdit ? "Mettre à jour" : "Créer la résidence"}
        </Button>
      </DialogFooter>
    </form>
  );
};

const Residences = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [editingResidence, setEditingResidence] = useState<Residence | undefined>(undefined);
  
  // Données simulées
  const [residences] = useState<Residence[]>([
    {
      id: "1",
      name: "Les Oliviers",
      address: "123 Avenue des Pins",
      postalCode: "75015",
      city: "Paris",
      phone: "01 23 45 67 89",
      email: "contact@lesoliviers.fr",
      website: "www.lesoliviers.fr",
      services: ["Chambres et séjours climatisés", "Cuisines équipées", "Fibre optique", "Parking"],
      apartmentTypes: ["F2", "F3", "F4"],
      rentRange: { min: 800, max: 1500 }
    },
    {
      id: "2",
      name: "La Villa Rose",
      address: "45 Rue des Fleurs",
      postalCode: "69003",
      city: "Lyon",
      phone: "04 56 78 90 12",
      email: "info@villarose.fr",
      services: ["Piscine", "Salle de sport", "Gardiennage", "Vidéosurveillance"],
      apartmentTypes: ["F3", "F4", "Penthouse"],
      rentRange: { min: 1000, max: 2500 }
    },
    {
      id: "3",
      name: "Le Parc",
      address: "8 Boulevard du Parc",
      postalCode: "33000",
      city: "Bordeaux",
      phone: "05 67 89 01 23",
      email: "contact@lepapc.fr",
      services: ["Ascenseur et monte-charge", "Conciergerie", "Fibre optique"],
      apartmentTypes: ["F2", "F3", "Duplex"],
      rentRange: { min: 750, max: 1800 }
    }
  ]);
  
  const handleEdit = (id: string) => {
    const residence = residences.find(r => r.id === id);
    if (residence) {
      setEditingResidence(residence);
      setShowForm(true);
    }
  };
  
  const handleDelete = (id: string) => {
    // Normalement vous feriez une API call ici
    toast({
      title: "Résidence supprimée",
      description: "La résidence a été supprimée avec succès."
    });
  };
  
  const handleCloseForm = () => {
    setShowForm(false);
    setEditingResidence(undefined);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Résidences</h1>
          <p className="text-gray-500 mt-1">Gérez vos résidences et leurs caractéristiques.</p>
        </div>
        
        <Dialog open={showForm} onOpenChange={setShowForm}>
          <DialogTrigger asChild>
            <Button>
              <Plus size={16} className="mr-2" />
              Ajouter une résidence
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>{editingResidence ? "Modifier la résidence" : "Ajouter une résidence"}</DialogTitle>
              <DialogDescription>
                {editingResidence 
                  ? "Modifiez les informations de la résidence ci-dessous." 
                  : "Remplissez les informations pour créer une nouvelle résidence."}
              </DialogDescription>
            </DialogHeader>
            <ResidenceForm 
              onClose={handleCloseForm} 
              initialData={editingResidence} 
            />
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="relative flex items-center flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input placeholder="Rechercher une résidence" className="pl-10" />
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter size={16} className="mr-1" /> Filtres
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown size={16} className="mr-1" /> Trier
          </Button>
          <Button variant="outline" size="sm">
            <Download size={16} className="mr-1" /> Exporter
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {residences.map((residence) => (
          <ResidenceCard 
            key={residence.id} 
            residence={residence} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default Residences;
