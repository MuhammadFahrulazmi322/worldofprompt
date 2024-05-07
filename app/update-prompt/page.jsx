"use client"

import Form from '@components/Form'
import React, { useEffect,useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRefresh } from '@context/RefreshContext'
import Loading from '@app/loading'

const EditPrompt = () => { 
    const { triggerRefresh } = useRefresh();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })


    useEffect(() => {
        setIsLoading(true);
        const getPromptDetails = async () => {
            const response = await fetch(`/api/prompt/${promptId}`)
            const data = await response.json();

            setPost({
                prompt: data.prompt,
                tag: data.tag
            })

            setIsLoading(false);
        }

        if(promptId) getPromptDetails();
    }, [promptId])

    const updatePrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        if(!promptId) return alert('Prompt ID not found');
        try{
            const response = await fetch(`/api/prompt/${promptId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    prompt: post.prompt,
                    tag: post.tag
                })
            })

            if(response.ok){
                router.push('/');
                triggerRefresh(); // Panggil triggerRefresh setelah berhasil
            }

        }catch(err){
            console.log(err);
        }
        finally{
            setSubmitting(false);
        }
    }
  return (
    isLoading ? <Loading /> :
    <Form
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
    
  )
}

export default EditPrompt