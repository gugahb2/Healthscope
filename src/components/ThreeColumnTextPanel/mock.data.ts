import { ThreeColumnTextPanelProps } from './ThreeColumnTextPanel'

const text1 =
  'With a dedicated focus on the provision of quality healthcare, we provide a range of medical and surgical services to our local Melbourne community as well as our regional, rural and international patients.'
const text2 = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at accumsan enim ut donec eget mollis pellentesque. Varius mattis quis est, ut congue mi malesuada. In quam auctor turpis sagittis iaculis massa tristique. Ultricies tincidunt id pellentesque egestas.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at accumsan enim ut donec eget mollis pellentesque. Varius mattis quis est, ut congue mi malesuada. In quam auctor turpis sagittis iaculis massa tristique. Ultricies tincidunt id pellentesque egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at accumsan enim ut donec eget mollis pellentesque. Varius mattis quis est, ut congue mi malesuada. In quam auctor turpis sagittis iaculis</p>`
const text3 = `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at accumsan enim ut donec eget mollis pellentesque. Varius mattis quis est, ut congue mi malesuada. In quam auctor turpis sagittis iaculis massa tristique. Ultricies tincidunt id pellentesque egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at accumsan enim ut donec eget mollis pellentesque. Varius mattis quis est, ut congue mi malesuada. In quam auctor turpis sagittis iaculis</p>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet at accumsan enim ut donec eget mollis pellentesque. Varius mattis quis est, ut congue mi malesuada. In quam auctor turpis sagittis iaculis massa tristique. Ultricies tincidunt id pellentesque egestas.</p>`

export const data: ThreeColumnTextPanelProps = {
  textAreas: [text1, text2, text3],
}
