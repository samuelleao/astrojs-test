import type { UserTypes } from "@/pages/home/types";
import { useEffect, useState } from "react";
import { Button } from "@/components/Button";

export function UserFromClient() {

    const [user, setUser] = useState<UserTypes>()

    async function GetUser() {
        const response = await fetch(`https://api.github.com/users/samuelleao`);
        const data: UserTypes = await response.json();
        setUser(data)
    }

    return (
        <>
            <Button onClick={GetUser}>Trazer dados pelo client</Button>
            {user && (
                <div className="flex items-center mb-4">
                    <img
                        src={user.avatar_url}
                        alt={user.name}
                        className="w-10 h-10 object-cover rounded-full mr-3 border-blue-600 border"
                    />
                    <h1 className="text-lg text-slate-50">{user.name}</h1>
                </div>
            )}
        </>
    )
}