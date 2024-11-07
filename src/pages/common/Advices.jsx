import { useForm } from "react-hook-form";

const inputsFields = [
    ['text', 'Nom et Prénom (s)'],
    ['email', 'Addresse email'],
    ['text', 'Titre du projet'],
    ['text', 'Description du projet']
];

function Advices(){
    const form = useForm();

    const onSubmit = async (data) => {
        await new Promise((resolver) => setTimeout(resolver, 1000))
        console.log(data);
    }

    const renderInputsFields = (type, placeholder) => (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                {...form.register(type)}
            />
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
            <div className='bg-white h-48 flex items-center justify-center rounded-lg font-bold text-xl'>
                <h1>Formulaire de soumission d'avis</h1>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div>
                        {inputsFields.map((fields, index) => (
                            <div key={index}>
                                {renderInputsFields(...fields)}
                            </div>
                        ))}
                    </div>
                    <button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                    >
                    {form.formState.isSubmitting ? 'Soummition...' : 'Soummetre'}
                    </button>
                </form> 
            </div>
        </div>
    )
}
export default Advices;