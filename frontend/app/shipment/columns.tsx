"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    name: string;
    custom_price: string;
    custom_delivery_time: number;
    company: {
        name: string;
        picture: string;
    };
};

export const columns: ColumnDef<Payment>[] = [
    {
        id: "company_img",
        header: "Empresa",
        enableSorting: false,
        cell: ({ row }) => {
            const imgUrl = row.original.company.picture;
            return (
                <img
                    src={imgUrl}
                    alt="Logo da empresa"
                    className="w-24 object-contain"
                />
            );
        },
    },
    {
        accessorKey: "name",
        id: "modality",
        header: "Modalidade",
        cell: ({ row }) => row.original.name,
    },
    {
        accessorKey: "custom_price",
        header: "Valor",
        cell: ({ row }) => `R$ ${row.original.custom_price}`,
    },
    {
        accessorKey: "custom_delivery_time",
        header: "Prazo",
        cell: ({ row }) => `${row.original.custom_delivery_time} dias`,
    },
]
