import { Clock5, DollarSign, Hourglass } from 'lucide-react';
import { Info } from './Components/Info';

export const infos: Info[] = [
  {
    icon: <Hourglass />,
    title: 'Carga horária',
    info: '280h',
  },
  {
    icon: <Clock5 />,
    title: 'Turno',
    info: 'Noturno',
  },
  {
    icon: <DollarSign />,
    title: 'Preço',
    info: '12x 256,80',
  },
];
