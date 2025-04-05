
import { Tenant, Residence, Apartment } from "@/types";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { Building, User, Briefcase, Edit, Trash2, CalendarRange } from "lucide-react";

interface TenantCardProps {
  tenant: Tenant;
  residence?: Residence;
  apartment?: Apartment;
  onEdit: () => void;
  onDelete: () => void;
}

const TenantCard = ({ tenant, residence, apartment, onEdit, onDelete }: TenantCardProps) => {
  // Format dates if they exist
  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    try {
      return format(new Date(dateString), "dd/MM/yyyy");
    } catch (error) {
      return "Invalid date";
    }
  };

  // Display name logic based on tenant type
  const displayName = tenant.type === "individual" 
    ? [tenant.title, tenant.first_name, tenant.last_name].filter(Boolean).join(" ")
    : tenant.company_name;

  return (
    <Card className="overflow-hidden animate-fade-in">
      <div className="h-24 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
        {tenant.type === "individual" ? (
          <User size={36} className="text-white" />
        ) : (
          <Briefcase size={36} className="text-white" />
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{displayName}</h3>
        
        <div className="mt-3 text-sm text-gray-600 space-y-1">
          <p>{tenant.email}</p>
          <p>{tenant.phone}</p>
          <p>{tenant.address}</p>
        </div>
        
        {(tenant.lease_start || tenant.lease_end) && (
          <div className="mt-3 flex items-center text-sm text-gray-700">
            <CalendarRange size={16} className="mr-1 flex-shrink-0" />
            <span>
              {formatDate(tenant.lease_start)} - {formatDate(tenant.lease_end)}
              {tenant.lease_duration && ` (${tenant.lease_duration} ${tenant.duration_type || "months"})`}
            </span>
          </div>
        )}
        
        {(residence || apartment) && (
          <div className="mt-3 flex items-start gap-1 text-sm text-gray-700">
            <Building size={16} className="mr-1 mt-0.5 flex-shrink-0" />
            <div>
              {residence?.name && <div>{residence.name}</div>}
              {apartment?.lot_number && (
                <div>
                  Apt {apartment.lot_number}
                  {apartment.type && ` (${apartment.type})`}
                </div>
              )}
            </div>
          </div>
        )}
        
        {tenant.diplomatic_clause && (
          <div className="mt-3">
            <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
              Diplomatic Clause
            </span>
          </div>
        )}
        
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" size="sm" onClick={onEdit}>
            <Edit size={16} className="mr-1" /> Edit
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-red-600 hover:text-red-700 hover:bg-red-50" 
            onClick={onDelete}
          >
            <Trash2 size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TenantCard;
