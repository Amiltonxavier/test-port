import { useState } from "react"
interface FormData {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
}
export default function Complaints() {
    const [currentStep, setStep] = useState<number>(1);

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
    });

    // Manipulador para atualizar os dados do formulário
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validação básica para avançar para o próximo passo
    const isStepValid = () => {
        switch (currentStep) {
            case 1:
                return formData.name.trim() !== "" && formData.email.trim() !== "";
            case 2:
                return formData.address.trim() !== "" && formData.city.trim() !== "" && formData.state.trim() !== "";
            default:
                return true;
        }
    };


    const nextStep = () =>{ 
        isStepValid()
        setStep(prev => prev + 1)
    }
    const prevStep = () => {setStep(prev => prev - 1)}


 /*    const renderFormStep = () => {
        switch (currentStep) {
            case 1:
                return <div>form 1</div>
            case 2:
                return <div>form 2</div>
            case 3:
                return <div>form 3</div>
            default:
                return
        }
    } */

    return (
        <>
            <form>
                {currentStep === 1 && (
                    <div>
                        <label>
                            Anonima
                            <input
                                type="checkbox"
                                name="identifcation"
                                value={formData.name}
                                onChange={handleChange}
                                className="border"
                                required
                            />
                        </label>
                        <label>
                            Identificar-me
                            <input
                                type="checkbox"
                                name="identifcation"
                                value={formData.email}
                                onChange={handleChange}
                                className="border"
                                required
                            />
                        </label>
                    </div>
                )}
                {currentStep === 2 && (
                    <div>
                        <label>
                            Endereço:
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                className="border"
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Cidade:
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                className="border"
                                onChange={handleChange}
                                required
                            />
                        </label>
                        <label>
                            Estado:
                            <input
                                type="text"
                                name="state"
                                className="border"
                                value={formData.state}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                )}
                <div>
                    {currentStep > 1 && <button type="button" onClick={prevStep}>Voltar</button>}
                    {currentStep < 2 && <button type="button" onClick={nextStep}>Próximo</button>}
                    {currentStep === 2 && <button type="submit">Enviar</button>}
                </div>
            </form>
        </>
    )
}
