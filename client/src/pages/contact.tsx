import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { usePageTitle } from "@/hooks/use-page-title";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required."),
  email: z.string().min(1, "Email is required.").email("Please enter a valid email address."),
  phone: z.string().optional().refine(
    (val) => !val || /^[\d\s\-\+\(\)]{7,}$/.test(val),
    "Please enter a valid phone number."
  ),
  message: z.string().min(1, "Message is required."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  usePageTitle(
    "Contact Us - GuardianUSA",
    "Get in touch with GuardianUSA for a confidential consultation about your commercial real estate needs."
  );

  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(_data: ContactFormValues) {
    setSubmitted(true);
  }

  return (
    <Layout>
      <section className="bg-primary py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary-foreground/70 text-sm font-semibold uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground font-serif mb-4" data-testid="text-contact-title">
              Contact Us
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ready to discuss your commercial real estate needs? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            <div className="lg:col-span-3">
              {submitted ? (
                <Card className="border-border/50" data-testid="card-success">
                  <CardContent className="p-8 lg:p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground font-serif mb-3" data-testid="text-success-title">
                      Thank You!
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Your message has been received. A member of our team will be in touch within one business day.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSubmitted(false);
                        form.reset();
                      }}
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-border/50" data-testid="card-contact-form">
                  <CardContent className="p-6 lg:p-8">
                    <h2 className="text-xl font-bold text-foreground font-serif mb-6">Send Us a Message</h2>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Input placeholder="John Smith" data-testid="input-name" {...field} />
                              </FormControl>
                              <FormMessage data-testid="error-name" />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email Address <span className="text-destructive">*</span></FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="john@company.com" data-testid="input-email" {...field} />
                                </FormControl>
                                <FormMessage data-testid="error-email" />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                  <Input type="tel" placeholder="(703) 555-0180" data-testid="input-phone" {...field} />
                                </FormControl>
                                <FormMessage data-testid="error-phone" />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message <span className="text-destructive">*</span></FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell us about your commercial real estate needs..."
                                  rows={5}
                                  data-testid="input-message"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage data-testid="error-message" />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" className="w-full sm:w-auto" data-testid="button-submit">
                          Send Message
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Card className="border-border/50" data-testid="card-contact-info">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-lg font-bold text-foreground font-serif mb-5">Contact Information</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Office Address</p>
                        <p className="text-sm text-muted-foreground">
                          1200 Corporate Drive, Suite 400<br />
                          Arlington, VA 22202
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">(703) 555-0180</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">info@guardianusa.com</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
