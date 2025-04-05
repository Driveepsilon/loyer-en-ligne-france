
export interface Tenant {
  id: string;
  type: 'individual' | 'company';
  title?: string;
  first_name?: string;
  last_name?: string;
  display_name?: string;
  company_name?: string;
  address: string;
  email: string;
  phone: string;
  portal_language?: string;
  id_number?: string;
  contacts?: any[];
  residence_id?: string;
  apartment_id?: string;
  lease_start?: string;
  lease_end?: string;
  lease_duration?: number;
  duration_type?: string;
  diplomatic_clause?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface Residence {
  id: string;
  name: string;
  address: string;
  postal_code: string;
  phone?: string;
  website?: string;
  email?: string;
  services?: string[];
  apartment_types?: string[];
  rent_range?: {
    min: number;
    max: number;
  };
  created_at?: string;
  updated_at?: string;
}

export interface Apartment {
  id: string;
  lot_number: string;
  residence_id: string;
  floor?: number;
  area?: number;
  type: string;
  furnished?: boolean;
  tantiemes?: number;
  base_rent: number;
  status?: string;
  created_at?: string;
  updated_at?: string;
}
