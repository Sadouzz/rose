import HeroSection from './components/HeroSection'
import MagicGarden from './components/MagicGarden'
import Flowers from './components/Flowers'
import SplitScrollText from './components/SplitScrollText'
import useIsDesktop from './hooks/useIsDesktop';

function App() {
  const isDesktop = useIsDesktop();
  return (
    <>
      <div style={{
        background: '#ff0000'
      }}>
      </div>
      <MagicGarden />
      <Flowers />
      <div className="min-h-screen w-full bg-white relative">
        {/* Pink Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
            radial-gradient(125% 125% at 50% 90%, #ffffff 40%, #ec4899 100%)
            `,
            backgroundSize: "100% 100%",
          }}
        />
        {/* Your Content/Components */}
        <HeroSection firstTitle='Yasmine, la fleur qui ne me voit pas.' secondTitle="Et je n'oublirai jamais le 22 décembre 2025." />
      </div>
      <div className={`bg-white relative ${isDesktop ? "py-40 px-20" : "py-16 px-5"}`}>
        <h1 className='text-black outline-text font-bold'>Je pensais que j'avais peur. Peur de te faire savoir que je pense à toi tout le temps, peur de subir un rejet.
          <br />
          <br />
          Mais au bout d'un moment, je me suis dit que ça ne sert à rien d'admirer une personne sans lui dire, alors que j'en ai la possibilité.
          <br /><br /> C'est de ce regret-là que j'avais peur, finalement.
          <br /><br />Alors voilà...
        </h1>

      </div>
      <div className="bg-white relative py-15">
        <h1 className={`hero-title playfair-display italic ${isDesktop ? "py-40 px-20" : "py-16 px-5"}`}>I like you,</h1>
        <SplitScrollText text='Not in an "I want to kiss you" way,' />
        <SplitScrollText text='But in a way where I want to hold your hands,' />
        <SplitScrollText text='Intertwine our fingers,' />
        <SplitScrollText text='Feel your warmth between mine.' />
      </div>


      <div className="bg-white relative py-5">
        <h1 className={`hero-title playfair-display italic ${isDesktop ? "py-40 px-20" : "py-16 px-5"}`}>I like you,</h1>
        <SplitScrollText text='Not in a "just passing by" way,' />
        <SplitScrollText text='But in a way that makes me stay,' />
        <SplitScrollText text='To hear your heartbeat in the silence,' />
        <SplitScrollText text='To exist beside you,' />
        <SplitScrollText text='Not in a mad obsession,' />
        <SplitScrollText text='But in the quiet certainty of choosing you, every single day.' />
      </div>


      <div className="min-h-screen w-full bg-white relative py-50">
        {/* Pink Glow Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #ec4899 100%)
      `,
            backgroundSize: "100% 100%",
          }}
        />
        <div className='relative'>
          <div className="row">
            <div className={`col-6 ${isDesktop ? " py-40 px-20" : "py-16 px-5"}`}>
              <h1 className='text-black outline-text font-bold'>I hope you’ll be mine,</h1>
              <h1 className='text-black outline-text'>Not as something to own,</h1>
              <h1 className='text-black outline-text'>But like the stars belong to the sky,</h1>
              <h1 className='text-black outline-text'>Like the tide belongs to the moon.</h1>
            </div>
          </div>
        </div>
        <div className='relative pt-30'>
          <div className="row">
            <div className={`col-6 ${isDesktop ? " py-40 px-20" : "py-16 px-5"}`}>
              <h1 className='text-black outline-text font-bold'>I hope you’ll never go,</h1>
              <h1 className='text-black outline-text'>Not because I’d hold you captive,</h1>
              <h1 className='text-black outline-text'>But because we’d stand side by side,</h1>
              <h1 className='text-black outline-text'>Like the shore meets the sea,</h1>
              <h1 className='text-black outline-text'>Always returning, always near.</h1>
            </div>
          </div>
        </div>
        <div className='relative pt-30'>
          <div className="row">
            <div className={`col-6 ${isDesktop ? " py-40 px-20" : "py-16 px-5"}`}>
              <h1 className='text-black outline-text font-bold'>The problem isn’t that love is blind,</h1>
              <h1 className='text-black hero-title '>No… WE ARE BLIND.</h1>
              <h1 className='text-black outline-text'>You don’t even really know me,</h1>
              <h1 className='text-black outline-text'>But you…</h1>
              <SplitScrollText text='You are the only light that I see.' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
