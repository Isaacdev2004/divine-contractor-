import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { UploadCloud, X, FileText, Image, File, CheckCircle2 } from "lucide-react";

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
import { CONTACT, contactLinks } from "@/lib/contact";

const MAX_FILES = 5;
const MAX_SIZE_MB = 10;
const ACCEPTED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
const ACCEPT_ATTR = ".pdf,.jpg,.jpeg,.png,.webp,.gif,.doc,.docx,.xls,.xlsx";

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
  "Rubbish Removal",
  "House & Office Clearance",
  "Waste Collection & Disposal",
  "Electrical Installation",
  "Painting & Finishing",
  "Property Maintenance",
  "Commercial Contracting",
  "Residential Projects",
];

const budgetList = ["Under $10k", "$10k - $50k", "$50k - $100k", "$100k+"];

interface AttachedFile {
  file: File;
  id: string;
  error?: string;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function FileIcon({ type }: { type: string }) {
  if (type.startsWith("image/")) return <Image className="w-4 h-4 text-blue-500" />;
  if (type === "application/pdf") return <FileText className="w-4 h-4 text-red-500" />;
  return <File className="w-4 h-4 text-gray-500" />;
}

export function QuoteForm() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [attachedFiles, setAttachedFiles] = useState<AttachedFile[]>([]);
  const [submitted, setSubmitted] = useState(false);

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

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const incoming = Array.from(e.target.files ?? []);
    if (!incoming.length) return;

    const remaining = MAX_FILES - attachedFiles.length;
    if (remaining <= 0) {
      toast({ description: `Maximum ${MAX_FILES} files allowed.`, variant: "destructive" });
      e.target.value = "";
      return;
    }

    const toAdd: AttachedFile[] = incoming.slice(0, remaining).map((file) => {
      let error: string | undefined;
      if (!ACCEPTED_TYPES.includes(file.type)) {
        error = "Unsupported file type";
      } else if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        error = `Exceeds ${MAX_SIZE_MB} MB limit`;
      }
      return { file, id: `${file.name}-${Date.now()}-${Math.random()}`, error };
    });

    setAttachedFiles((prev) => [...prev, ...toAdd]);
    e.target.value = "";
  }

  function removeFile(id: string) {
    setAttachedFiles((prev) => prev.filter((f) => f.id !== id));
  }

  function openFilePicker() {
    fileInputRef.current?.click();
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const hasErrors = attachedFiles.some((f) => f.error);
    if (hasErrors) {
      toast({
        title: "Fix file errors before submitting",
        description: "Remove the invalid files and try again.",
        variant: "destructive",
      });
      return;
    }

    const fileNames = attachedFiles.map((f) => f.file.name);
    const fileNote =
      fileNames.length > 0
        ? `\n\nFiles to attach manually: ${fileNames.join(", ")}`
        : "";

    const body = [
      `Name: ${values.fullName}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      `Service: ${values.service}`,
      `Budget: ${values.budget}`,
      "",
      values.message,
      fileNote,
    ].join("\n");

    const mailtoUrl = `${contactLinks.email}?subject=${encodeURIComponent(`Quote Request from ${values.fullName}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    form.reset();
    setAttachedFiles([]);

    toast({
      title: "Opening your email app",
      description: fileNames.length > 0
        ? "Please attach your files before sending the email."
        : "Your quote details have been prepared. Send the email to complete your request.",
      className: "bg-primary text-white border-none",
    });

    setTimeout(() => setSubmitted(false), 5000);
  }

  return (
    <section id="quote" className="py-24 bg-foreground text-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left copy */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-primary font-bold tracking-wider uppercase text-sm">Start Your Project</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Request a Free Estimate
              </h2>
              <p className="text-gray-400 mb-8 text-lg">
                Ready to build something great? Fill out the form with your project details, and our estimating team will get back to you with a comprehensive proposal.
              </p>
              <ul className="space-y-4 mb-8">
                {["Detailed cost breakdown", "Realistic project timeline", "No obligation consultation"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border border-white/10 rounded p-4 text-sm text-gray-400 space-y-3">
                <div>
                  <p className="font-semibold text-white mb-1">Direct contact</p>
                  <p>{CONTACT.person}</p>
                  <a href={contactLinks.tel} className="block hover:text-primary transition-colors">{CONTACT.phoneDisplay}</a>
                  <a href={contactLinks.email} className="block hover:text-primary transition-colors break-all">{CONTACT.email}</a>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Accepted file types</p>
                  <p>PDF, JPG, PNG, DOCX, XLSX — up to {MAX_SIZE_MB} MB each, max {MAX_FILES} files</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 shadow-2xl"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2">Email Ready!</h3>
                  <p className="text-gray-500">Send the email to {CONTACT.email} and we will contact you within 24 hours.</p>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Full Name"
                                data-testid="input-full-name"
                                className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary"
                                {...field}
                              />
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
                              <Input
                                placeholder="Email Address"
                                type="email"
                                data-testid="input-email"
                                className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary"
                                {...field}
                              />
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
                              <Input
                                placeholder="Phone Number"
                                type="tel"
                                data-testid="input-phone"
                                className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary"
                                {...field}
                              />
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
                                <SelectTrigger
                                  className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus:ring-primary focus:border-primary"
                                  data-testid="select-service"
                                >
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
                              <SelectTrigger
                                className="h-12 bg-gray-50 border-gray-200 text-gray-900 rounded-none focus:ring-primary focus:border-primary"
                                data-testid="select-budget"
                              >
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
                              data-testid="textarea-message"
                              className="min-h-[120px] bg-gray-50 border-gray-200 text-gray-900 rounded-none focus-visible:ring-primary focus-visible:border-primary resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* File Upload */}
                    <div className="space-y-3">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept={ACCEPT_ATTR}
                        multiple
                        className="hidden"
                        data-testid="input-file-hidden"
                        onChange={handleFileChange}
                      />

                      <button
                        type="button"
                        onClick={openFilePicker}
                        disabled={attachedFiles.length >= MAX_FILES}
                        data-testid="button-upload-file"
                        className="w-full border-2 border-dashed border-gray-300 hover:border-primary hover:bg-primary/5 disabled:opacity-40 disabled:cursor-not-allowed transition-colors rounded-none p-5 flex flex-col items-center gap-2 text-gray-500 hover:text-primary"
                      >
                        <UploadCloud className="w-8 h-8" />
                        <span className="font-semibold text-sm">
                          {attachedFiles.length >= MAX_FILES
                            ? "Maximum files reached"
                            : "Click to attach blueprints, plans or photos"}
                        </span>
                        <span className="text-xs text-gray-400">
                          PDF, JPG, PNG, DOCX, XLSX — up to {MAX_SIZE_MB} MB each
                        </span>
                      </button>

                      {/* File list */}
                      {attachedFiles.length > 0 && (
                        <ul className="space-y-2">
                          {attachedFiles.map(({ file, id, error }) => (
                            <li
                              key={id}
                              data-testid={`file-item-${id}`}
                              className={`flex items-center gap-3 px-4 py-3 rounded text-sm border ${
                                error
                                  ? "border-red-200 bg-red-50"
                                  : "border-gray-200 bg-gray-50"
                              }`}
                            >
                              <FileIcon type={file.type} />
                              <div className="flex-1 min-w-0">
                                <p className={`font-medium truncate ${error ? "text-red-600" : "text-gray-800"}`}>
                                  {file.name}
                                </p>
                                <p className={`text-xs ${error ? "text-red-500" : "text-gray-400"}`}>
                                  {error ?? formatBytes(file.size)}
                                </p>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(id)}
                                data-testid={`button-remove-file-${id}`}
                                className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
                                aria-label={`Remove ${file.name}`}
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}

                      {attachedFiles.length > 0 && (
                        <p className="text-xs text-gray-400 text-right">
                          {attachedFiles.length} / {MAX_FILES} files attached
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-none text-base"
                      data-testid="button-submit-quote"
                    >
                      Submit Request
                    </Button>

                  </form>
                </Form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
