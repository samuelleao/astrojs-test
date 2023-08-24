import { Button } from "@/components/ui/button";
import type { Pokemon } from "@/pages/index.astro";
import { useState } from "react";
import { Badge } from "../ui/badge";

interface MorePokemonsProps {
    page: number
}

export function MorePokemons({ page }: MorePokemonsProps) {

    const [currentPage, setCurrentPage] = useState(page)
    const [loading, setLoading] = useState(false)
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    async function GetMorePokemons() {
        setLoading(true)
        try {
            setCurrentPage(currentPage + 1)
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${currentPage}`)
            const data = await response.json();
            setPokemons([...pokemons, ...data?.results])
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div className="flex flex-wrap gap-10 mt-8">
                {pokemons?.map((pokemon, index) => <Badge key={index}><a href={`pokemon/${pokemon.name}`}>{pokemon.name}</a></Badge>)}
            </div>
            <Button onClick={GetMorePokemons} disabled={loading} className="mt-10 relative">
                {loading ? (
                    <>
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                        <span className="ml-4">Carregando...</span>
                    </>
                ) : (<>Carregar mais</>)}
            </Button>
        </>
    )
}