define([], function () {
    'use strict';

    return function (config, element) {
        // console.log(config, element);
        class Offcanvas {
            constructor(offcanvasBtnEl) {
                this.offcanvasBtnEl = offcanvasBtnEl;
                this.offcanvasEl = document.querySelector(offcanvasBtnEl.getAttribute('data-bs-target'));
                this.closeOffCanvasEl = this.offcanvasEl.querySelector('[data-bs-dismiss="offcanvas"]');
                this.bodyEl = document.querySelector('body');
                console.log(this.bodyEl)

                this.bindEvents();
                console.log('Check it out')
            }

            toggleOffcanvas() {
                if (this.offcanvasEl.classList.contains('show')) {
                    this.offcanvasEl.classList.remove('show');
                    this.bodyEl.classList.remove('scroll-locked');
                    document.querySelector('.offcanvas-backdrop').remove();
                } else {
                    this.offcanvasEl.classList.add('show');
                    let backdropDiv = document.createElement("div");
                    backdropDiv.classList.add('offcanvas-backdrop', 'fade', 'show');
                    this.offcanvasEl.after(backdropDiv);
                    backdropDiv.addEventListener('click', () => {
                        this.toggleOffcanvas();
                    });
                    this.bodyEl.classList.add('scroll-locked');
                }
            }

            bindEvents() {
                this.offcanvasBtnEl.addEventListener('click', () => {
                    this.toggleOffcanvas();
                });

                this.closeOffCanvasEl.addEventListener('click', () => {
                    this.toggleOffcanvas();
                });
            }
        }

        new Offcanvas(element);
    };
});
