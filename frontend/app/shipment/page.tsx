"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

export default function DemoPage() {
	const [open, setOpen] = useState(false)
	const [data, setData] = useState<Payment[]>([])

	const handleOpen = async () => {
		setOpen(true)
	}

	return (
		<div className="container mx-auto py-10">
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger asChild>
					<Button onClick={handleOpen}>Abrir Tabela</Button>
				</DialogTrigger>
				<DialogContent className="max-w-4xl">
					<DialogHeader>
						<DialogTitle>Transportadoras</DialogTitle>
					</DialogHeader>
					<DataTable columns={columns} data={data} />
				</DialogContent>
			</Dialog>
		</div>
	)
}
