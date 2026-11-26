const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

interface TipPercentageFormProps {
  tip: number;
  onHandleAddTip: (value: number) => void;
}

// Componente para representar el formulario de porcentaje de propinas
export default function TipPercentageForm({
  tip,
  onHandleAddTip,
}: TipPercentageFormProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-black text-2xl">Propinas:</h3>
      <form>
        {tipOptions.map((option) => (
          <div key={option.id} className="flex gap-2">
            <label htmlFor={option.id}>{option.label}</label>
            <input
              type="radio"
              id={option.id}
              name="tip"
              value={option.value}
              // Operador unario + (convierte el string a número)
              onChange={(e) => onHandleAddTip(+e.target.value)}
              // Desmarcar automáticamente si la propina seleccionada es diferente al valor de las opciones disponibles
              checked={option.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
