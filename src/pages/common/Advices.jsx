import { useForm } from "react-hook-form";
import { z } from "zod";

const inputsFields = [
    ['text', 'Nom et Prénom (s)'],
    ['email', 'Addresse email'],
    ['text', 'Titre du projet']
];

// const loginSchema = z.object({
//     name: nameSchema,
//     email: emailSchema,
// })

function Advices(){
    const form = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolver) => setTimeout(resolver, 1000))
        console.log(data);
    };

    const renderInputsFields = (type, placeholder, model) => (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                {...form.register(type)}
                className="bg-gray-50 border border-indigo-700 placeholder:text-sm placeholder:text-gray-600 pl-4 rounded-md h-10 w-full outline-none focus:ring-4"
            />
            <small>{form.formState.errors[type]?.message}</small>
        </div>
    )

    return(
        <div>
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Donnez vos avis</h1>
                <p className="mt-3 text-xl text-gray-500">
                    Donnez vos avis afin de permettre à notre équipe de prendre en compte vos besoin et de vous proposer le meilleur durant les compétitions!
                </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
                <div className='flex flex-col flex-1 items-center gap-8 bg-white flex items-center justify-center rounded-lg font-bold text-xl py-8 px-6 shadow-lg '>
                    <h1 className="underline text-indigo-700 text-2xl">Soumettre un avis</h1>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-4 items-center w-full">
                            {inputsFields.map((fields, index) => (
                                <div key={index} className="w-full">
                                    {renderInputsFields(...fields)}
                                </div>
                            ))}
                            <textarea
                                rows="7"
                                placeholder="Description du projet"
                                className="bg-gray-50 border border-purple-700 text-sm placeholder:text-sm placeholder:text-gray-600 pl-4 pt-4 rounded-md w-full outline-none focus:ring-4"
                            >
                            </textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="bg-indigo-600 text-white h-10 rounded-md"
                        >
                            {form.formState.isSubmitting ? 'Soummition...' : 'Soummetre'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Advices;