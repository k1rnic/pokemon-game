import React, { FC } from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import BattleBg from '../../assets/img/battle-bg.png';
import PokemonCard from '../../components/PokemonCard';
import pokemonCards from '../../data/pokemon-cards.json';
import Footer from '../../components/Footer';
import NavMenu from '../../components/NavMenu';

interface Props {
  onRouteChange?: (route: string) => any;
}

const HomePage: FC<Props> = ({ onRouteChange }) => {
  const handlePlayClick = () => {
    onRouteChange?.('game');
  };

  const handleNavChange = (page: string) => {
    onRouteChange?.(page);
  };

  return (
    <>
      <NavMenu onRouteChangeClick={handleNavChange} />
      <Header
        id="welcomeSection"
        title="Pokemon Royale"
        descr="Gotta catch em all"
        onPlayClick={handlePlayClick}
      />

      <Layout id="yourCardsSection" title="Your cards" urlBg={BattleBg}>
        <div className="flex">
          {pokemonCards.map(({ id, name, type, img, values }) => (
            <PokemonCard
              key={id}
              id={id}
              name={name}
              type={type}
              img={img}
              values={values}
            />
          ))}
        </div>
      </Layout>

      <Layout id="gameRulesSection" title="Rules" colorBg="#88ab77">
        <ul>
          <li>
            In the game two players face off against one another, one side
            playing as <b style={{ color: 'blue' }}>blue</b>, the other as{' '}
            <b style={{ color: 'red' }}>red</b> on a 3x3 grid.
          </li>
          <li>
            Each player has five cards in a hand and the aim is to capture the
            opponent's cards by turning them into the player's own color of{' '}
            <b style={{ color: 'red' }}>red</b> or{' '}
            <b style={{ color: 'blue' }}>blue</b>.
          </li>
        </ul>
      </Layout>

      <Layout id="winRulesSection" title="How to win" colorBg="#88ab77">
        <ul>
          <li>
            A majority of the total ten cards played{' '}
            <b>(including the one card that is not placed on the board)</b> must
            be of the player's card color.
          </li>
          <li>
            The player must capture cards by placing a card adjacent to an
            opponent's card whereupon the <b>ranks</b> of the sides where the
            two cards touch will be compared.
          </li>
          <li>
            If the rank of the opponent's card is higher than the player's card,
            the player's card will be captured and turned into the opponent's
            color.
          </li>
          <li>
            If the player's rank is higher, the opponent's card will be captured
            and changed into the player's color instead.
          </li>
        </ul>
      </Layout>
      <Footer />
    </>
  );
};

export default HomePage;
