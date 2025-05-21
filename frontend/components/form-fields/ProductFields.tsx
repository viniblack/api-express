// components/form-fields/ProductFields.tsx
"use client";

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FieldConfig {
  name: `products.${string}`;
  label: string;
  placeholder: string;
}

const productFieldConfigs: FieldConfig[] = [
  { name: "products.width", label: "Altura", placeholder: "Altura" },
  { name: "products.height", label: "Largura", placeholder: "Largura" },
  { name: "products.length", label: "Comprimento", placeholder: "Comprimento" },
  { name: "products.weight", label: "Peso", placeholder: "Peso" },
  { name: "products.insurance_value", label: "Valor", placeholder: "Valor" },
];

export function ProductFields({ control }: { control: any }) {
  return (
    <div className="grid grid-cols-5 gap-x-3">
      {productFieldConfigs.map((field) => (
        <FormField
          key={field.name}
          control={control}
          name={field.name}
          render={({ field: fieldProps }) => (
            <FormItem>
              <FormLabel>{field.label}</FormLabel>
              <FormControl>
                <Input type="number" placeholder={field.placeholder} {...fieldProps} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
}
