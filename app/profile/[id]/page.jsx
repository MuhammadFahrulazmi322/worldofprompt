    "use client"

    import Profile from "@components/Profile"
import { useSearchParams } from "next/navigation"
    import { useState, useEffect } from "react"

    const userProfile = ({params}) => {
        const searchParams = useSearchParams();
        const userName = searchParams.get('name').replace(/ /g, '');

        const [userposts, setUserposts] = useState([]);

        useEffect(() => {
            const fetchPosts = async () => {
                const response = await fetch(`/api/users/${params.id}/posts`);
                const data = await response.json();
                setUserposts(data);
            }
            if(params.id) fetchPosts();
        }, [params.id])
        return (
            <Profile
                name={userName}
                desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imaginations!`}
                data={userposts}
            />
        )
    }

    export default userProfile;