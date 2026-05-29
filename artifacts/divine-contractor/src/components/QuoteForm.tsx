import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { UploadCloud } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Please provide some details about your project"),
});

const servicesList = [
  "Building Construction",
  "Renovation Services",
  "Electrical Installation",
  "Plumbing Services",
  "Painting & Finishing",
  "Property Maintenance",
  "Commercial Contracting",
  "Residential Projects"
];

const budgetList = [
  "Under $10k",
  "$10k - $50k",
  "$50k - $100k",
  "$100k+"
];

export function QuoteForm() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Quote Request Sent Successfully!",
      description: "Our team will contact you within 24 hours.",
      variant: "default",
      className: "bg-primary text-white border-none",
    });
    form.reset();
  }

  return (
    <section id="quote" className="py-24 bg-foreground text-white relative">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-primary"></div>
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Start Your Project</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Request a Free Estimate
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Ready to build something great? Fill out the form with your project details, and our estimating team will get back to you with a comprehensive proposal.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-300">Detailed cost breakdown</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-300">Realistic project timeline</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <span className="text-gray-300">No obligation consultation</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 shadow-2xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Full Name" className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Email Address" type="email" className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Phone Number" type="tel" className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus:ring-primary focus:border-primary">
                                <SelectValue placeholder="Select Service Needed" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="rounded-none">
                              {servicesList.map((srv) => (
                                <SelectItem key={srv} value={srv}>{srv}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus:ring-primary focus:border-primary">
                              <SelectValue placeholder="Project Budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none">
                            {budgetList.map((bud) => (
                              <SelectItem key={bud} value={bud}>{bud}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project..." 
                            className="min-h-[120px] bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary resize-y" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full sm:w-auto h-12 rounded-none border-dashed border-2 border-gray-300 text-gray-500 hover:text-primary hover:border-primary hover:bg-primary/5"
                      onClick={(e) => {
                        e.preventDefault();
                        toast({ description: "File upload feature coming soon." });
                      }}
                    >
                      <UploadCloud className="mr-2 h-5 w-5" />
                      Attach Blueprints (Optional)
                    </Button>

                    <Button 
                      type="submit" 
                      className="w-full sm:w-auto h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-none text-base"
                      data-testid="button-submit-quote"
                    >
                      Submit Request
                    </Button>
                  </div>
                  
                </form>
              </Form>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
