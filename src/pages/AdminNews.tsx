import { useState, useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { ModernHeader as TransparentHeader } from '@/components/admin/ModernHeader';
import { DashboardButton } from '@/components/shared';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Edit, Eye, Plus, Trash2, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ModernSidebar } from '@/components/admin/ModernSidebar';
import { useAdminShortcuts } from '@/hooks/useKeyboardShortcuts';
import { Modal, FormInput } from '@/components/shared';

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  image_url: string | null;
  published: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export default function AdminNews() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddArticle, setShowAddArticle] = useState(false);
  const [editingArticle, setEditingArticle] = useState<NewsArticle | null>(null);
  const [newArticle, setNewArticle] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: 'Admin',
    image_url: '',
    published: false,
  });

  useAdminShortcuts();

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const { supabase } = await import('@/lib/supabase');
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setArticles(data || []);
    } catch (error) {
      console.error('Error loading articles:', error);
      toast({
        title: t('Fout', 'Error'),
        description: t('Kon artikelen niet laden', 'Could not load articles'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleAddArticle = async () => {
    try {
      const { supabase } = await import('@/lib/supabase');
      const slug = generateSlug(newArticle.title);
      
      const articleData = {
        ...newArticle,
        slug,
        published_at: newArticle.published ? new Date().toISOString() : null,
      };

      const { error } = await supabase
        .from('news_articles')
        .insert([articleData]);

      if (error) throw error;

      await loadArticles();
      setShowAddArticle(false);
      setNewArticle({
        title: '',
        excerpt: '',
        content: '',
        author: 'Admin',
        image_url: '',
        published: false,
      });

      toast({
        title: t('Artikel toegevoegd', 'Article added'),
        description: t('Het artikel is succesvol toegevoegd', 'The article has been added successfully'),
      });
    } catch (error) {
      console.error('Error adding article:', error);
      toast({
        title: t('Fout', 'Error'),
        description: t('Kon artikel niet toevoegen', 'Could not add article'),
        variant: 'destructive',
      });
    }
  };

  const handleUpdateArticle = async () => {
    if (!editingArticle) return;

    try {
      const { supabase } = await import('@/lib/supabase');
      const slug = generateSlug(editingArticle.title);

      const { error } = await supabase
        .from('news_articles')
        .update({
          title: editingArticle.title,
          slug,
          excerpt: editingArticle.excerpt,
          content: editingArticle.content,
          author: editingArticle.author,
          image_url: editingArticle.image_url,
          published: editingArticle.published,
          published_at: editingArticle.published && !editingArticle.published_at 
            ? new Date().toISOString() 
            : editingArticle.published_at,
        })
        .eq('id', editingArticle.id);

      if (error) throw error;

      await loadArticles();
      setEditingArticle(null);

      toast({
        title: t('Artikel bijgewerkt', 'Article updated'),
        description: t('Het artikel is succesvol bijgewerkt', 'The article has been updated successfully'),
      });
    } catch (error) {
      console.error('Error updating article:', error);
      toast({
        title: t('Fout', 'Error'),
        description: t('Kon artikel niet bijwerken', 'Could not update article'),
        variant: 'destructive',
      });
    }
  };

  const handleDeleteArticle = async (id: string) => {
    if (!confirm(t('Weet je zeker dat je dit artikel wilt verwijderen?', 'Are you sure you want to delete this article?'))) {
      return;
    }

    try {
      const { supabase } = await import('@/lib/supabase');
      const { error } = await supabase
        .from('news_articles')
        .delete()
        .eq('id', id);

      if (error) throw error;

      await loadArticles();
      toast({
        title: t('Artikel verwijderd', 'Article deleted'),
        description: t('Het artikel is succesvol verwijderd', 'The article has been deleted successfully'),
      });
    } catch (error) {
      console.error('Error deleting article:', error);
      toast({
        title: t('Fout', 'Error'),
        description: t('Kon artikel niet verwijderen', 'Could not delete article'),
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex">
      <ModernSidebar onLogout={handleLogout} />
      
      <TransparentHeader
        userName="Admin"
        notificationCount={0}
        onSearch={() => {}}
      />
      
      <div className="flex-1 lg:ml-64">
        <div className="px-8 py-6 pt-24 lg:pt-24">
          <div className="space-y-6">
            
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                  {t('Nieuwsartikelen', 'News Articles')}
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                  {t('Beheer nieuwsartikelen voor de website', 'Manage news articles for the website')}
                </p>
              </div>
              <DashboardButton
                variant="primary"
                onClick={() => setShowAddArticle(true)}
                className="gap-2"
              >
                <Plus className="h-4 w-4" />
                {t('Nieuw Artikel', 'New Article')}
              </DashboardButton>
            </div>

            {/* Articles Table */}
            <div className="rounded-2xl bg-white dark:bg-zinc-900 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-zinc-200 dark:border-zinc-800">
                    <tr className="bg-zinc-50 dark:bg-zinc-800/50">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Titel', 'Title')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Auteur', 'Author')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Status', 'Status')}
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Datum', 'Date')}
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        {t('Acties', 'Actions')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">
                          <div className="flex items-center justify-center gap-2">
                            <div className="h-5 w-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                            <p>{t('Laden...', 'Loading...')}</p>
                          </div>
                        </td>
                      </tr>
                    ) : articles.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-12 text-center text-zinc-500 dark:text-zinc-400">
                          <Newspaper className="h-12 w-12 mx-auto text-zinc-300 mb-3" />
                          <p>{t('Nog geen artikelen', 'No articles yet')}</p>
                        </td>
                      </tr>
                    ) : (
                      articles.map((article) => (
                        <tr key={article.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {article.title}
                              </p>
                              <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">
                                {article.excerpt}
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">{article.author}</p>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant={article.published ? "default" : "secondary"}>
                              {article.published ? t('Gepubliceerd', 'Published') : t('Concept', 'Draft')}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                              <Calendar className="h-4 w-4" />
                              {new Date(article.created_at).toLocaleDateString('nl-NL')}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => window.open(`/news/${article.slug}`, '_blank')}
                                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                title={t('Bekijken', 'View')}
                              >
                                <Eye className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => setEditingArticle(article)}
                                className="p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                                title={t('Bewerken', 'Edit')}
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() => handleDeleteArticle(article.id)}
                                className="p-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                                title={t('Verwijderen', 'Delete')}
                              >
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Article Modal */}
      <Modal
        isOpen={showAddArticle}
        onClose={() => setShowAddArticle(false)}
        title={t('Nieuw Artikel', 'New Article')}
      >
        <div className="space-y-4">
          <FormInput
            label={t('Titel', 'Title')}
            value={newArticle.title}
            onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
            placeholder={t('Artikel titel', 'Article title')}
          />
          
          <FormInput
            label={t('Korte beschrijving', 'Short description')}
            value={newArticle.excerpt}
            onChange={(e) => setNewArticle({ ...newArticle, excerpt: e.target.value })}
            placeholder={t('Korte samenvatting...', 'Short summary...')}
          />

          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {t('Inhoud', 'Content')}
            </label>
            <textarea
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
              placeholder={t('Artikel inhoud...', 'Article content...')}
              rows={8}
              className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <FormInput
            label={t('Afbeelding URL', 'Image URL')}
            value={newArticle.image_url}
            onChange={(e) => setNewArticle({ ...newArticle, image_url: e.target.value })}
            placeholder="https://..."
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="published"
              checked={newArticle.published}
              onChange={(e) => setNewArticle({ ...newArticle, published: e.target.checked })}
              className="rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="published" className="text-sm text-zinc-700 dark:text-zinc-300">
              {t('Direct publiceren', 'Publish immediately')}
            </label>
          </div>

          <div className="flex gap-3 pt-4">
            <DashboardButton
              variant="secondary"
              onClick={() => setShowAddArticle(false)}
              className="flex-1"
            >
              {t('Annuleren', 'Cancel')}
            </DashboardButton>
            <DashboardButton
              variant="primary"
              onClick={handleAddArticle}
              className="flex-1"
              disabled={!newArticle.title || !newArticle.content}
            >
              {t('Opslaan', 'Save')}
            </DashboardButton>
          </div>
        </div>
      </Modal>

      {/* Edit Article Modal */}
      <Modal
        isOpen={!!editingArticle}
        onClose={() => setEditingArticle(null)}
        title={t('Artikel Bewerken', 'Edit Article')}
      >
        {editingArticle && (
          <div className="space-y-4">
            <FormInput
              label={t('Titel', 'Title')}
              value={editingArticle.title}
              onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
            />
            
            <FormInput
              label={t('Korte beschrijving', 'Short description')}
              value={editingArticle.excerpt}
              onChange={(e) => setEditingArticle({ ...editingArticle, excerpt: e.target.value })}
            />

            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {t('Inhoud', 'Content')}
              </label>
              <textarea
                value={editingArticle.content}
                onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                rows={8}
                className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <FormInput
              label={t('Afbeelding URL', 'Image URL')}
              value={editingArticle.image_url || ''}
              onChange={(e) => setEditingArticle({ ...editingArticle, image_url: e.target.value })}
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="edit-published"
                checked={editingArticle.published}
                onChange={(e) => setEditingArticle({ ...editingArticle, published: e.target.checked })}
                className="rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="edit-published" className="text-sm text-zinc-700 dark:text-zinc-300">
                {t('Gepubliceerd', 'Published')}
              </label>
            </div>

            <div className="flex gap-3 pt-4">
              <DashboardButton
                variant="secondary"
                onClick={() => setEditingArticle(null)}
                className="flex-1"
              >
                {t('Annuleren', 'Cancel')}
              </DashboardButton>
              <DashboardButton
                variant="primary"
                onClick={handleUpdateArticle}
                className="flex-1"
              >
                {t('Opslaan', 'Save')}
              </DashboardButton>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
