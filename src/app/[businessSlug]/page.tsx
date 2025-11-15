import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { mockBusinesses } from "@/lib/mock-data";
import { notFound } from "next/navigation";

interface PublicBookingPageProps {
  params: {
    businessSlug: string;
  };
}

export default function PublicBookingPage({ params }: PublicBookingPageProps) {
  const { businessSlug } = params;

  // DEBUG: Force loading the first business to check if data loading works.
  const business = mockBusinesses[0];

  if (!business) {
    notFound(); // If business not found, show 404 page
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        {/* Business Header */}
        <div className="relative h-48 w-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
          {business.logoUrl && (
            <Image
              src={business.logoUrl}
              alt={`${business.name} Logo`}
              width={120}
              height={120}
              className="rounded-full border-4 border-white dark:border-gray-800 object-cover"
            />
          )}
          {!business.logoUrl && (
            <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 text-4xl font-bold">
              {business.name.charAt(0)}
            </div>
          )}
          <h1 className="absolute bottom-4 text-white text-3xl font-bold drop-shadow-md">
            {business.name}
          </h1>
        </div>

        {/* Business Info */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 text-center mb-2">
            {business.contactInfo.address} | {business.contactInfo.phone}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
            {business.description}
          </p>
        </div>

        {/* Services List */}
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid gap-4">
            {business.services.length > 0 ? (
              business.services.map((service) => (
                <Card key={service.id} className="flex justify-between items-center p-4">
                  <div>
                    <CardTitle className="text-lg">{service.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
                      {service.durationMinutes} min - ${service.price.toFixed(2)}
                    </CardDescription>
                  </div>
                  <Button disabled>Reservar (Próximamente)</Button>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">
                No hay servicios disponibles en este momento.
              </p>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 text-center text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700">
          Powered by easyTurn
        </div>
      </div>
    </div>
  );
}