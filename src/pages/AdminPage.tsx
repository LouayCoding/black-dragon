import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHero } from '@/components/PageHero';
import { useLanguage } from '@/hooks/useLanguage';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Mail, Calendar, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface Registration {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  message: string;
  createdAt: string;
}

interface NewsletterSubscription {
  id: string;
  email: string;
  createdAt: string;
}

const programLabels: Record<string, string> = {
  'little-tigers': 'Kleine Tijgers (4-6)',
  'youth': 'Jeugd Programma (7-12)',
  'teen': 'Tiener Krijgers (13-17)',
  'adult': 'Volwassenen Training (18+)',
  'family': 'Gezinslessen',
};

export default function AdminPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [registrations, setRegistrations] = useLocalStorage<Registration[]>('tkd-registrations', []);
  const [subscriptions, setSubscriptions] = useLocalStorage<NewsletterSubscription[]>('newsletter-subscriptions', []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const deleteRegistration = (id: string) => {
    setRegistrations(registrations.filter(r => r.id !== id));
    toast({
      title: t('Registratie verwijderd', 'Registration deleted'),
      description: t('De registratie is succesvol verwijderd.', 'The registration has been successfully deleted.'),
    });
  };

  const deleteSubscription = (id: string) => {
    setSubscriptions(subscriptions.filter(s => s.id !== id));
    toast({
      title: t('Aanmelding verwijderd', 'Subscription deleted'),
      description: t('De nieuwsbrief aanmelding is succesvol verwijderd.', 'The newsletter subscription has been successfully deleted.'),
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHero
          title={t('Admin Dashboard', 'Admin Dashboard')}
          subtitle={t('Beheer registraties en nieuwsbrief aanmeldingen', 'Manage registrations and newsletter subscriptions')}
        />

        <section className="py-16">
          <div className="container mx-auto px-4 space-y-12">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t('Totaal Registraties', 'Total Registrations')}
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{registrations.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {t('Nieuwsbrief Aanmeldingen', 'Newsletter Subscriptions')}
                  </CardTitle>
                  <Mail className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{subscriptions.length}</div>
                </CardContent>
              </Card>
            </div>

            {/* Registrations Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  {t('Proefles Registraties', 'Trial Class Registrations')}
                </CardTitle>
                <CardDescription>
                  {t('Overzicht van alle proefles aanmeldingen', 'Overview of all trial class registrations')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {registrations.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    {t('Nog geen registraties ontvangen.', 'No registrations received yet.')}
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>{t('Naam', 'Name')}</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>{t('Telefoon', 'Phone')}</TableHead>
                        <TableHead>{t('Programma', 'Program')}</TableHead>
                        <TableHead>{t('Datum', 'Date')}</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {registrations.map((reg) => (
                        <TableRow key={reg.id}>
                          <TableCell className="font-medium">{reg.name}</TableCell>
                          <TableCell>{reg.email}</TableCell>
                          <TableCell>{reg.phone || '-'}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">
                              {programLabels[reg.program] || reg.program}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(reg.createdAt)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteRegistration(reg.id)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>

            {/* Newsletter Subscriptions Table */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {t('Nieuwsbrief Aanmeldingen', 'Newsletter Subscriptions')}
                </CardTitle>
                <CardDescription>
                  {t('Overzicht van alle nieuwsbrief abonnees', 'Overview of all newsletter subscribers')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {subscriptions.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">
                    {t('Nog geen nieuwsbrief aanmeldingen.', 'No newsletter subscriptions yet.')}
                  </p>
                ) : (
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>{t('Aangemeld op', 'Subscribed on')}</TableHead>
                        <TableHead className="w-[50px]"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subscriptions.map((sub) => (
                        <TableRow key={sub.id}>
                          <TableCell className="font-medium">{sub.email}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {formatDate(sub.createdAt)}
                            </div>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => deleteSubscription(sub.id)}
                              className="text-destructive hover:text-destructive hover:bg-destructive/10"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
