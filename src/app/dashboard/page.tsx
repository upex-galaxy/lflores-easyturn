import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Dashboard del Negocio
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl">
        ¡Bienvenido a tu panel de control! Aquí podrás gestionar tus servicios, horarios y citas.
      </p>
      <div className="space-x-4">
        <Button size="lg" disabled>Gestionar Servicios (Próximamente)</Button>
        <Button size="lg" disabled>Ver Calendario (Próximamente)</Button>
        <Link href="/" passHref>
          <Button variant="outline" size="lg">Volver a Inicio</Button>
        </Link>
      </div>
    </div>
  );
}