import { Logo } from '@/components/Sidebar/logo'
import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '@/components/Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 to-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>



      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projetos" icon={SquareStack} />
        <NavItem title="Tarefas" icon={CheckSquare} />
        <NavItem title="Reportar" icon={Flag} />
        <NavItem title="Usuários" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Suporte" icon={LifeBuoy} />
          <NavItem title="Configurações" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

       <div className='h-px bg-zinc-300'/>
       <Profile />
      </div>
    </aside>
  )
}