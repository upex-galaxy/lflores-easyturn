import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center p-4">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        Bienvenido a easyTurn
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
        La forma más sencilla de gestionar tus reservas y ofrecer una experiencia fluida a tus clientes.
      </p>
      <div className="space-x-4">
        <Link href="/login" passHref>
          <Button size="lg">Iniciar Sesión</Button>
        </Link>
        <Link href="/easy-turn-barbershop" passHref>
          <Button variant="outline" size="lg">Ver Página de Ejemplo</Button>
        </Link>
      </div>
    </div>
  );
}