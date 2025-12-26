# Shared Components

Deze folder bevat herbruikbare components die door de hele applicatie gebruikt worden.

## 📁 Folder Structuur

```
shared/
├── forms/           # Form-gerelateerde components
│   ├── FormInput.tsx
│   ├── FormSelect.tsx
│   ├── FormSection.tsx
│   └── index.ts
├── modals/          # Modal/Dialog components
│   ├── Modal.tsx
│   └── index.ts
└── index.ts         # Centrale export
```

## 🎯 Gebruik

### Import via centrale export (aanbevolen)
```tsx
import { Modal, FormInput, FormSelect, FormSection } from '@/components/shared';
```

### Direct import
```tsx
import { FormInput } from '@/components/shared/forms';
import { Modal } from '@/components/shared/modals';
```

## 📝 Component Documentatie

### FormInput
Gestylede input field met label, error handling en consistent design.

```tsx
<FormInput
  label="Naam"
  required
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Bijv. Jan de Vries"
  error="Dit veld is verplicht"
  helperText="Vul je volledige naam in"
/>
```

**Props:**
- `label?: string` - Label boven het veld
- `required?: boolean` - Toont * bij label
- `error?: string` - Error bericht (rood)
- `helperText?: string` - Helper tekst (grijs)
- Alle standaard HTML input props

### FormSelect
Gestylede select dropdown met consistent design.

```tsx
<FormSelect
  label="Programma"
  required
  value={program}
  onValueChange={setProgram}
  options={[
    { value: 'youth', label: 'Jeugd' },
    { value: 'adult', label: 'Volwassenen' }
  ]}
  placeholder="Kies een programma"
  error="Selecteer een programma"
/>
```

**Props:**
- `label?: string` - Label boven het veld
- `required?: boolean` - Toont * bij label
- `value: string` - Huidige waarde
- `onValueChange: (value: string) => void` - Change handler
- `options: FormSelectOption[]` - Array van { value, label }
- `placeholder?: string` - Placeholder tekst
- `error?: string` - Error bericht

### FormSection
Sectie header voor groeperen van form velden.

```tsx
<FormSection 
  title="Persoonlijke Gegevens"
  description="Vul je contactgegevens in"
>
  <FormInput ... />
  <FormInput ... />
</FormSection>
```

**Props:**
- `title: string` - Sectie titel (uppercase, klein)
- `description?: string` - Optionele beschrijving
- `children: ReactNode` - Form velden
- `className?: string` - Extra styling

### Modal
Moderne modal/dialog met backdrop blur en consistent design.

```tsx
<Modal
  isOpen={showModal}
  onClose={() => setShowModal(false)}
  title="Nieuwe Leerling"
  description="Vul de gegevens in"
  maxWidth="2xl"
  footer={
    <>
      <Button variant="outline" onClick={onCancel}>Annuleren</Button>
      <Button onClick={onSave}>Opslaan</Button>
    </>
  }
>
  <div className="space-y-6">
    {/* Modal content */}
  </div>
</Modal>
```

**Props:**
- `isOpen: boolean` - Modal zichtbaarheid
- `onClose: () => void` - Close handler
- `title: string` - Modal titel
- `description?: string` - Optionele beschrijving
- `children: ReactNode` - Modal content
- `footer?: ReactNode` - Footer buttons
- `maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"` - Max breedte
- `className?: string` - Extra styling

## 🎨 Design Systeem

Alle components volgen het moderne design systeem:

- **Rounded corners:** `rounded-xl` (12px)
- **Input height:** `h-11` (44px)
- **Spacing:** Consistent met 4px grid
- **Colors:**
  - Background: `bg-zinc-50 dark:bg-zinc-900/50`
  - Border: `border-zinc-200 dark:border-zinc-800`
  - Focus: `ring-blue-500`
  - Error: `border-red-500 text-red-500`
- **Typography:**
  - Labels: `text-sm font-medium text-zinc-700 dark:text-zinc-300`
  - Section headers: `text-xs font-semibold uppercase tracking-wider text-zinc-500`

## ✅ Best Practices

1. **Gebruik altijd shared components** voor forms en modals
2. **Import via centrale export** voor betere tree-shaking
3. **Gebruik FormSection** voor groeperen van gerelateerde velden
4. **Validatie errors** via de `error` prop
5. **Required velden** markeren met `required` prop
6. **Consistent spacing** met `space-y-4` of `gap-4`

## 🔄 Voorbeeld: Complete Form

```tsx
import { Modal, FormInput, FormSelect, FormSection } from '@/components/shared';
import { Button } from '@/components/ui/button';

function AddStudentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    program: 'youth'
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Nieuwe Leerling"
      description="Vul de gegevens in"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Annuleren
          </Button>
          <Button onClick={handleSubmit}>
            Opslaan
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        <FormSection title="Persoonlijke Gegevens">
          <div className="grid md:grid-cols-2 gap-4">
            <FormInput
              label="Naam"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <FormInput
              label="Email"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </FormSection>

        <FormSection title="Training">
          <FormSelect
            label="Programma"
            required
            value={formData.program}
            onValueChange={(value) => setFormData({ ...formData, program: value })}
            options={[
              { value: 'youth', label: 'Jeugd' },
              { value: 'adult', label: 'Volwassenen' }
            ]}
          />
        </FormSection>
      </div>
    </Modal>
  );
}
```

## 🚀 Voordelen

- ✅ **Geen dubbele code** - Eén component, overal gebruiken
- ✅ **Consistent design** - Automatisch juiste styling
- ✅ **Type-safe** - TypeScript types included
- ✅ **Dark mode** - Automatisch ondersteund
- ✅ **Accessible** - Proper labels en ARIA
- ✅ **Maintainable** - Wijzigingen op één plek
- ✅ **Professional** - Clean folder structuur
