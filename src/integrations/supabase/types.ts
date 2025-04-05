export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      apartments: {
        Row: {
          area: number | null
          base_rent: number
          created_at: string | null
          floor: number | null
          furnished: boolean | null
          id: string
          lot_number: string
          residence_id: string
          status: string | null
          tantiemes: number | null
          type: string
          updated_at: string | null
        }
        Insert: {
          area?: number | null
          base_rent: number
          created_at?: string | null
          floor?: number | null
          furnished?: boolean | null
          id?: string
          lot_number: string
          residence_id: string
          status?: string | null
          tantiemes?: number | null
          type: string
          updated_at?: string | null
        }
        Update: {
          area?: number | null
          base_rent?: number
          created_at?: string | null
          floor?: number | null
          furnished?: boolean | null
          id?: string
          lot_number?: string
          residence_id?: string
          status?: string | null
          tantiemes?: number | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "apartments_residence_id_fkey"
            columns: ["residence_id"]
            isOneToOne: false
            referencedRelation: "residences"
            referencedColumns: ["id"]
          },
        ]
      }
      condo_fee_invoices: {
        Row: {
          apartment_id: string
          created_at: string | null
          date: string
          due_date: string
          general_conditions: string | null
          id: string
          invoice_number: string
          items: Json
          owner_id: string
          payment_terms: string | null
          period_end: string
          period_start: string
          reference: string | null
          status: string | null
          subject: string | null
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          apartment_id: string
          created_at?: string | null
          date: string
          due_date: string
          general_conditions?: string | null
          id?: string
          invoice_number: string
          items: Json
          owner_id: string
          payment_terms?: string | null
          period_end: string
          period_start: string
          reference?: string | null
          status?: string | null
          subject?: string | null
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          apartment_id?: string
          created_at?: string | null
          date?: string
          due_date?: string
          general_conditions?: string | null
          id?: string
          invoice_number?: string
          items?: Json
          owner_id?: string
          payment_terms?: string | null
          period_end?: string
          period_start?: string
          reference?: string | null
          status?: string | null
          subject?: string | null
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "condo_fee_invoices_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "apartments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "condo_fee_invoices_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "owners"
            referencedColumns: ["id"]
          },
        ]
      }
      condo_fee_receipts: {
        Row: {
          amount_received: number
          created_at: string | null
          id: string
          invoice_id: string
          owner_id: string
          payment_date: string
          payment_method: string
          receipt_number: string
          reference: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          amount_received: number
          created_at?: string | null
          id?: string
          invoice_id: string
          owner_id: string
          payment_date: string
          payment_method: string
          receipt_number: string
          reference?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          amount_received?: number
          created_at?: string | null
          id?: string
          invoice_id?: string
          owner_id?: string
          payment_date?: string
          payment_method?: string
          receipt_number?: string
          reference?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "condo_fee_receipts_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "condo_fee_invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "condo_fee_receipts_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "owners"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          file_path: string
          file_size: number | null
          file_type: string | null
          id: string
          name: string
          related_id: string | null
          related_type: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          file_path: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          name: string
          related_id?: string | null
          related_type?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          name?: string
          related_id?: string | null
          related_type?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      invoice_items: {
        Row: {
          amount: number
          created_at: string | null
          description: string | null
          id: string
          name: string
          type: string
          unit: string
          updated_at: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          type: string
          unit: string
          updated_at?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          type?: string
          unit?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      leases: {
        Row: {
          agency_fees: number | null
          apartment_id: string
          base_rent: number
          created_at: string | null
          diplomatic_clause: boolean | null
          document_url: string | null
          duration: number
          duration_type: string | null
          end_date: string
          id: string
          payment_frequency: string | null
          security_deposit: number | null
          signed: boolean | null
          start_date: string
          status: string | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          agency_fees?: number | null
          apartment_id: string
          base_rent: number
          created_at?: string | null
          diplomatic_clause?: boolean | null
          document_url?: string | null
          duration: number
          duration_type?: string | null
          end_date: string
          id?: string
          payment_frequency?: string | null
          security_deposit?: number | null
          signed?: boolean | null
          start_date: string
          status?: string | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          agency_fees?: number | null
          apartment_id?: string
          base_rent?: number
          created_at?: string | null
          diplomatic_clause?: boolean | null
          document_url?: string | null
          duration?: number
          duration_type?: string | null
          end_date?: string
          id?: string
          payment_frequency?: string | null
          security_deposit?: number | null
          signed?: boolean | null
          start_date?: string
          status?: string | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "leases_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "apartments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "leases_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          recipient_id: string | null
          recipient_type: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          recipient_id?: string | null
          recipient_type: string
          title: string
          type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          recipient_id?: string | null
          recipient_type?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      owners: {
        Row: {
          address: string
          apartment_id: string | null
          company_name: string | null
          contacts: Json | null
          created_at: string | null
          display_name: string | null
          email: string
          first_name: string | null
          id: string
          id_number: string | null
          last_name: string | null
          phone: string
          portal_language: string | null
          residence_id: string | null
          title: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          address: string
          apartment_id?: string | null
          company_name?: string | null
          contacts?: Json | null
          created_at?: string | null
          display_name?: string | null
          email: string
          first_name?: string | null
          id?: string
          id_number?: string | null
          last_name?: string | null
          phone: string
          portal_language?: string | null
          residence_id?: string | null
          title?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          address?: string
          apartment_id?: string | null
          company_name?: string | null
          contacts?: Json | null
          created_at?: string | null
          display_name?: string | null
          email?: string
          first_name?: string | null
          id?: string
          id_number?: string | null
          last_name?: string | null
          phone?: string
          portal_language?: string | null
          residence_id?: string | null
          title?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "owners_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "apartments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "owners_residence_id_fkey"
            columns: ["residence_id"]
            isOneToOne: false
            referencedRelation: "residences"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string | null
          first_name: string | null
          id: string
          last_name: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      rent_invoices: {
        Row: {
          apartment_id: string
          created_at: string | null
          date: string
          due_date: string
          general_conditions: string | null
          id: string
          invoice_number: string
          items: Json
          payment_terms: string | null
          period_end: string
          period_start: string
          reference: string | null
          status: string | null
          subject: string | null
          tenant_id: string
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          apartment_id: string
          created_at?: string | null
          date: string
          due_date: string
          general_conditions?: string | null
          id?: string
          invoice_number: string
          items: Json
          payment_terms?: string | null
          period_end: string
          period_start: string
          reference?: string | null
          status?: string | null
          subject?: string | null
          tenant_id: string
          total_amount: number
          updated_at?: string | null
        }
        Update: {
          apartment_id?: string
          created_at?: string | null
          date?: string
          due_date?: string
          general_conditions?: string | null
          id?: string
          invoice_number?: string
          items?: Json
          payment_terms?: string | null
          period_end?: string
          period_start?: string
          reference?: string | null
          status?: string | null
          subject?: string | null
          tenant_id?: string
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rent_invoices_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "apartments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rent_invoices_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      rent_receipts: {
        Row: {
          amount_received: number
          created_at: string | null
          id: string
          invoice_id: string
          payment_date: string
          payment_method: string
          receipt_number: string
          reference: string | null
          status: string | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          amount_received: number
          created_at?: string | null
          id?: string
          invoice_id: string
          payment_date: string
          payment_method: string
          receipt_number: string
          reference?: string | null
          status?: string | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          amount_received?: number
          created_at?: string | null
          id?: string
          invoice_id?: string
          payment_date?: string
          payment_method?: string
          receipt_number?: string
          reference?: string | null
          status?: string | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rent_receipts_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "rent_invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rent_receipts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      residences: {
        Row: {
          address: string
          apartment_types: Json | null
          created_at: string | null
          email: string | null
          id: string
          name: string
          phone: string | null
          postal_code: string
          rent_range: Json | null
          services: Json | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          address: string
          apartment_types?: Json | null
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          phone?: string | null
          postal_code: string
          rent_range?: Json | null
          services?: Json | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          address?: string
          apartment_types?: Json | null
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          postal_code?: string
          rent_range?: Json | null
          services?: Json | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      syndic_expenses: {
        Row: {
          amount: number
          apartment_id: string | null
          created_at: string | null
          date: string
          description: string
          id: string
          reference: string | null
          updated_at: string | null
        }
        Insert: {
          amount: number
          apartment_id?: string | null
          created_at?: string | null
          date: string
          description: string
          id?: string
          reference?: string | null
          updated_at?: string | null
        }
        Update: {
          amount?: number
          apartment_id?: string | null
          created_at?: string | null
          date?: string
          description?: string
          id?: string
          reference?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "syndic_expenses_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "apartments"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          address: string
          apartment_id: string | null
          company_name: string | null
          contacts: Json | null
          created_at: string | null
          diplomatic_clause: boolean | null
          display_name: string | null
          duration_type: string | null
          email: string
          first_name: string | null
          id: string
          id_number: string | null
          last_name: string | null
          lease_duration: number | null
          lease_end: string | null
          lease_start: string | null
          phone: string
          portal_language: string | null
          residence_id: string | null
          title: string | null
          type: string
          updated_at: string | null
        }
        Insert: {
          address: string
          apartment_id?: string | null
          company_name?: string | null
          contacts?: Json | null
          created_at?: string | null
          diplomatic_clause?: boolean | null
          display_name?: string | null
          duration_type?: string | null
          email: string
          first_name?: string | null
          id?: string
          id_number?: string | null
          last_name?: string | null
          lease_duration?: number | null
          lease_end?: string | null
          lease_start?: string | null
          phone: string
          portal_language?: string | null
          residence_id?: string | null
          title?: string | null
          type: string
          updated_at?: string | null
        }
        Update: {
          address?: string
          apartment_id?: string | null
          company_name?: string | null
          contacts?: Json | null
          created_at?: string | null
          diplomatic_clause?: boolean | null
          display_name?: string | null
          duration_type?: string | null
          email?: string
          first_name?: string | null
          id?: string
          id_number?: string | null
          last_name?: string | null
          lease_duration?: number | null
          lease_end?: string | null
          lease_start?: string | null
          phone?: string
          portal_language?: string | null
          residence_id?: string | null
          title?: string | null
          type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tenants_apartment_id_fkey"
            columns: ["apartment_id"]
            isOneToOne: false
            referencedRelation: "apartments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenants_residence_id_fkey"
            columns: ["residence_id"]
            isOneToOne: false
            referencedRelation: "residences"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
