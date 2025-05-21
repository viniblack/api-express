"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from "axios"
import { Form } from "@/components/ui/form"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ZipCodeField } from "@/components/form-fields/ZipCodeField"
import { ProductFields } from "@/components/form-fields/ProductFields"
import { columns, type Payment } from "./shipment/columns"
import { DataTable } from "./shipment/data-table"


const FormSchema = z.object({
  zipcodeFrom: z.string().min(8, {
    message: "CEP precisa ter 8 dígitos"
  }),
  zipcodeTo: z.string().min(8, {
    message: "CEP precisa ter 8 dígitos"
  }),
  products: z.object({
    width: z.coerce.number(),
    height: z.coerce.number(),
    length: z.coerce.number(),
    weight: z.coerce.number(),
    insurance_value: z.coerce.number(),
  })
})

export default function Home() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      zipcodeFrom: "",
      zipcodeTo: "",
      products: {
        width: 0,
        height: 0,
        length: 0,
        weight: 0,
        insurance_value: 0,
      }
    }
  })

  const [freteData, setFreteData] = useState<Payment[]>([])
  const [openDialog, setOpenDialog] = useState(false);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const from_postal_code = data.zipcodeFrom;
    const to_postal_code = data.zipcodeTo;
    const products = data.products;

    try {
      const response = await axios.post('http://localhost:5000/shipment', {
        from_postal_code, to_postal_code, products
      });

      const fretesValidos = response.data.filter((item: any) => !item.error);

      setFreteData(fretesValidos);
      setOpenDialog(true); // abre o Dialog ao calcular com sucesso
      toast("Fretes calculados com sucesso!");
    } catch (error) {
      console.error("Erro ao consultar frete:", error);
      toast("Erro ao consultar frete", {
        description: "Verifique se o CEP está correto.",
      });
    }
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex space-x-7">
              <ZipCodeField
                control={form.control}
                name="zipcodeFrom"
                label="CEP de origem"
                description="Por favor digite o CEP de origem."
              />
              <ZipCodeField
                control={form.control}
                name="zipcodeTo"
                label="CEP de destino"
                description="Por favor digite o CEP de destino."
              />
            </div>
            <ProductFields control={form.control} />
            <div className="flex justify-center">
              <Button type="submit">Calcular</Button>
            </div>
          </form>
        </Form>

        {/* Dialog para mostrar o resultado */}
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>Opções de Frete</DialogTitle>
            </DialogHeader>
            <DataTable columns={columns} data={freteData} />
          </DialogContent>
        </Dialog>
      </main>
    </div>
  )
}
