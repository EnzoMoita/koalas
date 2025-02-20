'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="Meus Detalhes"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Perfil"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Senhas"
          isSelected={currentTab === 'tab3'}
        />
        <TabItem value="tab4" title="Time" isSelected={currentTab === 'tab4'} />
        <TabItem value="tab5" title="Plano" isSelected={currentTab === 'tab5'} />
        <TabItem
          value="tab6"
          title="Faturamento"
          isSelected={currentTab === 'tab6'}
        />
        <TabItem
          value="tab7"
          title="Email"
          isSelected={currentTab === 'tab7'}
        />
        <TabItem
          value="tab8"
          title="Notificações"
          isSelected={currentTab === 'tab8'}
        />
        <TabItem
          value="tab9"
          title="Integrações"
          isSelected={currentTab === 'tab9'}
        />
        <TabItem value="tab10" title="API" isSelected={currentTab === 'tab10'} />
      </Tabs.List>
    </Tabs.Root>
  )
}