'use client';

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Separator } from '../ui/separator'
import { Button } from "../ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea";
import ImageUpload from "../custom ui/ImageUpload";

const formSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(500).trim(),
    image: z.string()
  })

const CollectionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      image: "",
    },
  })

  // Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className='p-10'>
      <p className='text-heading2-bold'>Criar Coleção</p>
      <Separator className='bg-grey-1 mt-4 mb-7'/>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input placeholder="Título da coleção" {...field} />
                </FormControl>
                <FormMessage className="text-red-1 font-light"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descrição</FormLabel>
                <FormControl>
                  <Textarea placeholder="digite a descrição" {...field} rows={5}/>
                </FormControl>
                <FormMessage className="text-red-1 font-light"/>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imagem</FormLabel>
                <FormControl>
                  <ImageUpload 
                    value={field.value ? [field.value] : []}
                    onChange={(url)=>field.onChange(url)}
                    onRemove={()=>field.onChange('')}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Salvar</Button>
        </form>
      </Form>
    </div>
  )
}

export default CollectionForm