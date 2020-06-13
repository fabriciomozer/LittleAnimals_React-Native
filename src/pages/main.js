import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const Sound = require('react-native-sound');

export default class Main extends Component {
  static navigationOptions = {
    title: 'Little Amimals',
  };

  componentDidMount() {
    setTimeout(() => {
      const birdSoundState = new Sound('birdsongs.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o birdsongs.wav', error);
        }
      });
      const catSoundState = new Sound('catsound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o catsongs.wav', error);
        }
      });
      const ovelhaSoundState = new Sound('ovelhasound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o ovelhasongs.wav', error);
        }
      });
      const cavaloSoundState = new Sound('cavalosound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o cavalosound.wav', error);
        }
      });
      const dogSoundState = new Sound('dogsound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o dogsongs.wav', error);
        }
      });
      const lionSoundState = new Sound('lionsound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o lionsongs.wav', error);
        }
      });
      const patoSoundState = new Sound('patosound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o patosongs.wav', error);
        }
      });
      const porcoSoundState = new Sound('porcosound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o porcosongs.wav', error);
        }
      });
      const sapoSoundState = new Sound('saposound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o porcosongs.wav', error);
        }
      });
      const vacaSoundState = new Sound('vacasound.wav', '', error => {
        if (error) {
          console.log('Falha ao ler o vacasongs.wav', error);
        }
      });

      this.setState({
        birdSoundState,
        catSoundState,
        ovelhaSoundState,
        cavaloSoundState,
        dogSoundState,
        lionSoundState,
        patoSoundState,
        porcoSoundState,
        sapoSoundState,
        vacaSoundState,
      });
    }, 1000);
  }

  state = {
    birdSoundState: {},
    catSoundState: {},
    ovelhaSoundState: {},
    cavaloSoundState: {},
    dogSoundState: {},
    lionSoundState: {},
    patoSoundState: {},
    porcoSoundState: {},
    sapoSoundState: {},
    vacaSoundState: {},
  };

  playSound(animalSound) {
    console.log('ENTROU');
    console.log(animalSound);
    if (animalSound === 'passaro') {
      setTimeout(() => {
        const birdSound = this.state.birdSoundState;
        birdSound.play();
      }, 100);
    } else if (animalSound === 'cachorro') {
      setTimeout(() => {
        const cachorroSound = this.state.dogSoundState;
        cachorroSound.play();
      }, 100);
    }else if (animalSound === 'cavalo') {
      setTimeout(() => {
        const cavaloSound = this.state.cavaloSoundState;
        cavaloSound.play();
      }, 100);
    }else if (animalSound === 'ovelha') {
      setTimeout(() => {
        const ovelhaSound = this.state.ovelhaSoundState;
        ovelhaSound.play();
      }, 100);
    }else if (animalSound === 'gato') {
      setTimeout(() => {
        const gatoSound = this.state.catSoundState;
        gatoSound.play();
      }, 100);
    }else if (animalSound === 'pato') {
      setTimeout(() => {
        const patoSound = this.state.patoSoundState;
        patoSound.play();
      }, 100);
    }else if (animalSound === 'porco') {
      setTimeout(() => {
        const porcoSound = this.state.porcoSoundState;
        porcoSound.play();
      }, 100);
    }else if (animalSound === 'sapo') {
      setTimeout(() => {
        const sapoSound = this.state.sapoSoundState;
        sapoSound.play();
      }, 100);
    }else if (animalSound === 'vaca') {
      setTimeout(() => {
        const vacaSound = this.state.vacaSoundState;
        vacaSound.play();
      }, 100);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../images/draw_nature_01.jpeg')}
          style={styles.backgorundImage}>
          <View style={styles.lineAnimals}>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('pato');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_pato.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('passaro');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_passaro.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('ovelha');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_ovelha.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.lineAnimals}>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('gato');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_gato.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('sapo');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_sapo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('cachorro');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_cachorro.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.lineAnimals}>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('cavalo');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_cavalo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('porco');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_porco.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.productionButton}
              onPress={() => {
                this.playSound('vaca');
              }}>
              <Image
                style={styles.styleAnimals}
                source={require('../images/ic_vaca.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  backgorundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  lineAnimals: {
    flex: 1,
    flexDirection: 'row',
  },
  styleAnimals: {
    margin: 14,
  },
});
