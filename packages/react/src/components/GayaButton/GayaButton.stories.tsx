/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import Divider from '../Divider'
import Typography from '../Typography'
import { GayaButtonProps } from './GayaButton.props'
import GayaButton from './GayaButton'
import StoryContainer from '../../helpers/StoryContainer'

// theme version 0.83.0

const componentStatus = `

> O GaYaButton faz parte da evolução contínua dos componentes do GaYa Design System. Lançado como um novo componente, o GaYaButton substitui o antigo Button, que permanecerá disponível para uso, mas não receberá mais atualizações ou suporte ativo. 
Recomendamos a migração para o GaYaButton o mais rápido possível para aproveitar as melhorias e garantir a compatibilidade futura.

## Propriedades
| Figma props            | React props               | Valores                                                                          |    Status           |
|---                     |---                        |                                                                              ---|                  ---|
| **hierarchy**            | **variant**               | filled, outlined, ghost, tonal                                                  | ✅ Disponível        |
| **Text Tranform**      | **textTranform**          | uppercase, lowercase,  capitalize                                               | ✅ Disponível        |
| **Size**               | **size**                  | semi, semiX, medium                                                             | ✅ Disponível        |
| **Icon**               | **iconName**              | 'icon_name'                                                                     | ✅ Disponível        |
| **disabled**           | **disabled**              | true, false                                                                     | ✅ Disponível        |
| **Display**            | **fullWidth **            | true, false                                                                     | ✅ Disponível        |
| **--**                 | **brand**                 | avon, avon_v2, natura, natura_v2, natura_v3, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Disponível        |
| **Color**             | **color**                 | primary, onPrimary, secondary, onSecondary, neutral, inverse                     | ✅ Disponível        |

## Exemplos de usos
`

export default {
  title: 'Components/GayaButton',
  component: GayaButton,
  parameters: {
    componentSubtitle: '',
    docs: { description: { component: componentStatus } },
    actions: { argTypesRegex: '^on.*' }
  }
} as Meta

export const Playground: Story<GayaButtonProps> = (args) => <GayaButton {...args} />
Playground.args = {
  children: 'button',
  onClick: () => null
}

export const Variants: Story<GayaButtonProps> = (args) => (
  <StoryContainer>
    <GayaButton ariaLabel="Action 1" {...args} variant="filled" />
    <GayaButton ariaLabel="Action 2" {...args} variant="outlined" />
    <GayaButton ariaLabel="Action 3" {...args} variant="ghost" />
    <GayaButton ariaLabel="Action 4" {...args} variant="tonal" />
  </StoryContainer>
)
Variants.args = { ...Playground.args }
export const Brands: Story<GayaButtonProps> = (args) => (
  <div style={{
    display: 'flex', flexDirection: 'column', gap: 20, padding: 15
  }}
  >
    <StoryContainer>
      <GayaButton key={20} brand="natura_v3" {...args} variant="filled" />
      <GayaButton key={30} brand="natura_v3" {...args} variant="outlined" />
      <GayaButton key={40} brand="natura_v3" {...args} variant="ghost" />
      <GayaButton key={40} brand="natura_v3" {...args} variant="tonal" />
    </StoryContainer>

    <Divider />
    <StoryContainer>
      <GayaButton key={16} brand="consultoriaDeBeleza" {...args} variant="filled" />
      <GayaButton key={17} brand="consultoriaDeBeleza" {...args} variant="outlined" />
      <GayaButton key={18} brand="consultoriaDeBeleza" {...args} variant="ghost" />
      <GayaButton key={18} brand="consultoriaDeBeleza" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={16} brand="forcaDeVendas" {...args} variant="filled" />
      <GayaButton key={17} brand="forcaDeVendas" {...args} variant="outlined" />
      <GayaButton key={18} brand="forcaDeVendas" {...args} variant="ghost" />
      <GayaButton key={18} brand="forcaDeVendas" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={10} brand="natura_v2" {...args} variant="filled" />
      <GayaButton key={11} brand="natura_v2" {...args} variant="outlined" />
      <GayaButton key={12} brand="natura_v2" {...args} variant="ghost" />
      <GayaButton key={12} brand="natura_v2" {...args} variant="tonal" />
    </StoryContainer>

    <StoryContainer>
      <GayaButton key={1} brand="avon" {...args} variant="filled" />
      <GayaButton key={2} brand="avon" {...args} variant="outlined" />
      <GayaButton key={3} brand="avon" {...args} variant="ghost" />
      <GayaButton key={3} brand="avon" {...args} variant="tonal" />
    </StoryContainer>

    <StoryContainer>
      <GayaButton key={4} brand="avon_v2" {...args} variant="filled" />
      <GayaButton key={5} brand="avon_v2" {...args} variant="outlined" />
      <GayaButton key={6} brand="avon_v2" {...args} variant="ghost" />
      <GayaButton key={6} brand="avon_v2" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={7} brand="natura" {...args} variant="filled" />
      <GayaButton key={8} brand="natura" {...args} variant="outlined" />
      <GayaButton key={9} brand="natura" {...args} variant="ghost" />
      <GayaButton key={9} brand="natura" {...args} variant="tonal" />
    </StoryContainer>

    <StoryContainer>
      <GayaButton key={19} brand="theBodyShop" {...args} variant="filled" />
      <GayaButton key={20} brand="theBodyShop" {...args} variant="outlined" />
      <GayaButton key={21} brand="theBodyShop" {...args} variant="ghost" />
      <GayaButton key={21} brand="theBodyShop" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={13} brand="casaEestilo" {...args} variant="filled" />
      <GayaButton key={14} brand="casaEestilo" {...args} variant="outlined" />
      <GayaButton key={15} brand="casaEestilo" {...args} variant="ghost" />
      <GayaButton key={15} brand="casaEestilo" {...args} variant="tonal" />
    </StoryContainer>
    <StoryContainer>
      <GayaButton key={13} brand="casaEestilo_v2" {...args} variant="filled" />
      <GayaButton key={14} brand="casaEestilo_v2" {...args} variant="outlined" />
      <GayaButton key={15} brand="casaEestilo_v2" {...args} variant="ghost" />
      <GayaButton key={15} brand="casaEestilo_v2" {...args} variant="tonal" />
    </StoryContainer>
  </div>
)
Brands.args = { ...Playground.args }
export const LabelTransform: Story<GayaButtonProps> = (args) => (
  <StoryContainer>
    <GayaButton textTransform="uppercase" {...args} variant="contained" />
    <GayaButton textTransform="capitalize" {...args} variant="contained" />
    <GayaButton textTransform="lowercase" {...args} variant="contained" />
  </StoryContainer>
)
LabelTransform.args = { ...Playground.args }

export const Sizes: Story<GayaButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton variant="filled" {...args} size="semi" />
      <GayaButton variant="filled" {...args} size="semiX" />
      <GayaButton variant="filled" {...args} size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="outlined" size="semi" />
      <GayaButton {...args} variant="outlined" size="semiX" />
      <GayaButton {...args} variant="outlined" size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="ghost" size="semi" />
      <GayaButton {...args} variant="ghost" size="semiX" />
      <GayaButton {...args} variant="ghost" size="medium" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="tonal" size="semi" />
      <GayaButton {...args} variant="tonal" size="semiX" />
      <GayaButton {...args} variant="tonal" size="medium" />
    </div>
  </div>
)
Sizes.args = { ...Playground.args }

export const Disabled: Story<GayaButtonProps> = (args) => (
  <StoryContainer>
    <GayaButton {...args} variant="filled" />
    <GayaButton {...args} variant="outlined" />
    <GayaButton {...args} variant="ghost" />
    <GayaButton {...args} variant="tonal" />
  </StoryContainer>
)

Disabled.args = { ...Playground.args, disabled: true }

export const Icon: Story<GayaButtonProps> = (args) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="outlined" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} variant="outlined" showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="ghost" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} variant="ghost" showIcon iconName="outlined-default-mockup" />
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <GayaButton {...args} variant="tonal" showIcon iconName="outlined-default-mockup" iconPosition="left" />
      <GayaButton {...args} variant="tonal" showIcon iconName="outlined-default-mockup" />
    </div>
  </div>
)
Icon.args = { ...Playground.args }

export const FullWidth: Story<GayaButtonProps> = (args) => (
  <div style={{ display: 'flex', gap: 8, flexDirection: 'column' }}>
    <GayaButton {...args} />
    <GayaButton {...args} variant="outlined" />
    <GayaButton {...args} variant="ghost" />
    <GayaButton {...args} variant="tonal" />
  </div>
)
FullWidth.args = { ...Playground.args, fullWidth: true }

export const AccessibilityGuide = () => (
  <div>
    <Typography variant="heading4">Accessibility Guide</Typography>
    <table
      style={{
        fontFamily: 'roboto',
        fontSize: '13px',
        maxWidth: '800px',
        margin: '20px 0',
        borderCollapse: 'collapse',
        border: '1px solid #ccc'
      }}
    >
      <thead>
        <tr style={{ backgroundColor: '#f4f4f4', color: '#333' }}>
          <th style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}><Typography variant="subtitle1">Atributo</Typography></th>
          <th style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}><Typography variant="subtitle1">Descrição</Typography></th>
          <th style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}><Typography variant="subtitle1">Código de Exemplo</Typography></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>role</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Especifica o papel do elemento para tecnologias assistivas.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton role="button"&gt;Click me&lt;/Gayabutton&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-label</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Fornece uma etiqueta de texto para leitores de tela.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton aria-label="Fechar"&gt;X&lt;/Gayabutton&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-describedby</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Identifica elementos que descrevem o botão.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>
            <code>&lt;Gayabutton aria-describedby="descriptionClose"&gt;Fechar&lt;/Gayabutton&gt;</code>
            <br />
            <code>&lt;div id="descriptionClose"&gt;Clique para fechar a janela&lt;/div&gt;</code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-disabled</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Indica que o elemento está desabilitado, mas ainda é acessado pela tecnologia assistiva.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton aria-disabled="true"&gt;Não disponível&lt;/button&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-haspopup</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Indica que o botão tem um menu popup associado.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton aria-haspopup="true"&gt;Opções&lt;/button&gt;</code></td>
        </tr>
      </tbody>
    </table>
  </div>
)
