import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from 'mdbreact';
import _ from 'lodash';
import { IMG_LIST } from './constant';
import './CarouselApp.css';

export class CarouselApp extends Component {

  ls = IMG_LIST;

  isVertical(x) {
    let b = false;
    if (x === 2313 || x === 2353 || x === 2455) {
      b = true;
    }

    return b;
  }

  render() {
    return (
      <MDBContainer>
        <MDBCarousel activeItem={1} length={this.ls.length} showControls={true} showIndicators={true} className="z-depth-1">
          <MDBCarouselInner>
            {
              _.map(this.ls, (k, i) => {
                return (
                  <MDBCarouselItem itemId={i + 1}>
                    <MDBView>
                      {this.isVertical(k) && (
                        <img className="d-block w-100" src={`./photo/MC3_${k}.jpg`} alt={`Slide #${i + 1}`} />
                      )}
                      {!this.isVertical(k) && (
                        <img className="d-block w-100" src={`./photo/MC3_${k}.jpg`} alt={`Slide #${i + 1}`} />
                      )}
                    </MDBView>
                  </MDBCarouselItem>
                )
              })
            }
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    )
  }
}