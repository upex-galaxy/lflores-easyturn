import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl">Iniciar Sesión</CardTitle>
          <CardDescription>
            Ingresa tu email y contraseña para acceder a tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="m@example.com" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="password">Contraseña</label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Iniciar Sesión</Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ¿Olvidaste tu contraseña?{" "}
            <Link href="#" className="underline">
              Recuperar
            </Link>
          </div>
          <div className="mt-2 text-center text-sm">
            ¿No tienes cuenta?{" "}
            <Link href="#" className="underline">
              Regístrate
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}