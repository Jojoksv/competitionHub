import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { descriptionSchema, emailSchema, nameSchema, projectSchema } from "../../lib/schemas";
import { useSendProject } from "../../data/auth";

// Définition des champs du formulaire
const inputsFields = [
    ['text', 'Nom et Prénoms', 'name', 'Kossouvi Joseph'],
    ['email', 'Addresse email', 'email', 'exemple@exemple.com'],
    ['text', 'Titre du projet', 'project', 'Plateforme de gestion administrative, etc...']
];

// Schéma de validation avec Zod
const loginSchema = z.object({
    name: nameSchema,
    email: emailSchema,
    project: projectSchema,
    description: descriptionSchema
});

// Composant de champ de saisie individuel
function InputField({ type, label, name, placeholder, register, error }) {
    return (
        <div className="w-full flex flex-col">
            <label className="text-sm mb-1">{label} :</label>
            <input
                type={type}
                placeholder={`Ex: ${placeholder}`}
                {...register(name)}
                className="bg-gray-50 border font-medium text-sm border-indigo-700 placeholder:text-sm placeholder:text-gray-600 pl-4 rounded-md h-10 w-full outline-none focus:ring-4"
                aria-label={label}
            />
            <small aria-live="polite" className="text-red-600 font-normal text-sm">{error}</small>
        </div>
    );
}

function Advices() {
    const form = useForm({
        resolver: zodResolver(loginSchema)
    });
    const { postProject } = useSendProject();

    // Fonction de soumission du formulaire
    const onSubmit = (data) => {
        postProject(data, {
            onSuccess: (data) => console.log(data),
            onError: (error) => form.setError("apiError", { message: error.message })
        });
    };

    return (
        <div>
            <div className="text-center mb-12">
                <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Proposez nous vos projets</h1>
                <p className="mt-3 text-xl text-gray-500">
                    Proposez vos projets afin de permettre à notre équipe de prendre en compte vos avis et besoins et de vous proposer le meilleur durant les différentes compétitions!
                </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
                <div className="flex flex-col items-center gap-8 bg-white rounded-lg font-bold text-xl py-8 px-6 shadow-lg">
                    <h1 className="underline text-indigo-700 text-2xl">Proposition de projet</h1>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-4 items-center w-full">
                            {inputsFields.map(([type, label, name, placeholder], index) => (
                                <InputField
                                    key={index}
                                    type={type}
                                    label={label}
                                    name={name}
                                    placeholder={placeholder}
                                    register={form.register}
                                    error={form.formState.errors[name]?.message}
                                />
                            ))}
                            <div className="w-full flex flex-col">
                                <label className="text-sm pb-1">Description du projet :</label>
                                <textarea
                                    rows="7"
                                    {...form.register('description')}
                                    placeholder="Ex: Description du projet"
                                    className="bg-gray-50 border border-purple-700 font-medium text-sm placeholder:text-sm placeholder:text-gray-600 pl-4 pt-4 rounded-md w-full outline-none focus:ring-4"
                                    aria-label="Description du projet"
                                ></textarea>
                                <small className="text-red-600 font-normal text-sm">{form.formState.errors.description?.message}</small>
                            </div>
                        </div>
                        {form.formState.errors.apiError && (
                            <div className="text-red-600 font-normal text-sm text-center">{form.formState.errors.apiError.message}</div>
                        )}
                        <button
                            type="submit"
                            disabled={form.formState.isSubmitting}
                            className="bg-indigo-600 text-white h-10 rounded-md font-medium"
                            aria-busy={form.formState.isSubmitting}
                        >
                            {form.formState.isSubmitting ? 'Soumission en cours...' : 'Soummetre'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Advices;
