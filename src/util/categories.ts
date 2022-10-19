import Employee from '../assets/employee.png'
import Cars from '../assets/cars.png'
import Car from '../assets/car.png'

export const categories = [
  { id: '1', title: 'Veículos reservados e vendidos ', subtitle: 'Veículos reservados e vendidos por você', count: `${147} VEÍCULOS`, img: Car, link: '' },
  { id: '2', title: 'Listagem geral de veículos', subtitle: 'Listagem de veículos de toda a empresa', count: `${180} VEÍCULOS`, img: Cars, link: '' },
  { id: '3', title: 'Funcionários da empresa', subtitle: 'Listagem de todos os funcionários da empresa', count: `${147} FUNCIONÁRIOS`, img: Employee, link: '/employees' }
]
