import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export function PageHeader({ title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <section className="bg-foreground pt-32 pb-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #F97316 0, #F97316 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-400 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
              <Home size={14} />
              Home
            </Link>
            <ChevronRight size={14} className="text-gray-600" />
            <span className="text-primary font-medium">{breadcrumb}</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
