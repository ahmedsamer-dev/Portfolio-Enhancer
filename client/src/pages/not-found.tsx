import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="p-4 bg-destructive/10 rounded-full text-destructive mb-6">
          <AlertTriangle className="w-12 h-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">404 Page Not Found</h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all">
          Return Home
        </Link>
      </div>
    </Layout>
  );
}
