
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

const Charges = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Charges</h1>
          <p className="text-gray-500 mt-1">Gérez les charges et dépenses</p>
        </div>
        <Button className="flex items-center gap-2">
          <PlusCircle size={16} />
          <span>Nouvelle charge</span>
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl font-semibold">Fonctionnalité à venir</h2>
              <p className="text-gray-500 mt-2">
                La gestion des charges sera implémentée prochainement.
              </p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Charges;
