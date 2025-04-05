
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FolderOpen, FileText } from "lucide-react";

const Documents = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Documents</h1>
          <p className="text-gray-500 mt-1">Gérez tous vos documents</p>
        </div>
        <Button className="flex items-center gap-2">
          <Upload size={16} />
          <span>Téléverser</span>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col items-center justify-center h-48 hover:bg-gray-50 cursor-pointer transition-colors">
            <FolderOpen size={48} className="text-blue-500 mb-3" />
            <h3 className="font-medium">Contrats</h3>
            <p className="text-sm text-gray-500">0 documents</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center justify-center h-48 hover:bg-gray-50 cursor-pointer transition-colors">
            <FolderOpen size={48} className="text-green-500 mb-3" />
            <h3 className="font-medium">Quittances</h3>
            <p className="text-sm text-gray-500">0 documents</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center justify-center h-48 hover:bg-gray-50 cursor-pointer transition-colors">
            <FolderOpen size={48} className="text-amber-500 mb-3" />
            <h3 className="font-medium">Factures</h3>
            <p className="text-sm text-gray-500">0 documents</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center justify-center h-48 hover:bg-gray-50 cursor-pointer transition-colors">
            <FolderOpen size={48} className="text-purple-500 mb-3" />
            <h3 className="font-medium">États des lieux</h3>
            <p className="text-sm text-gray-500">0 documents</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center justify-center h-48 hover:bg-gray-50 cursor-pointer transition-colors">
            <FolderOpen size={48} className="text-red-500 mb-3" />
            <h3 className="font-medium">Correspondance</h3>
            <p className="text-sm text-gray-500">0 documents</p>
          </Card>
          
          <Card className="p-6 flex flex-col items-center justify-center h-48 hover:bg-gray-50 cursor-pointer transition-colors">
            <FolderOpen size={48} className="text-gray-500 mb-3" />
            <h3 className="font-medium">Autres</h3>
            <p className="text-sm text-gray-500">0 documents</p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Documents;
