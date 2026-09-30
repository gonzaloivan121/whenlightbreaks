import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponent, type HeroBackgroundType, type HeroSize } from './hero.component';

@Component({
    imports: [HeroComponent],
    template: `
        <hero-component
            [backgroundType]="backgroundType"
            [size]="size"
            [fullScreen]="fullScreen"
            [imageSrc]="imageSrc"
            [imageAlt]="imageAlt"
            [videoSrc]="videoSrc"
            [videoPoster]="videoPoster">
            <h1>Hero Headline</h1>
            <p>Hero supporting text.</p>
        </hero-component>
    `,
})
class TestHostComponent {
    backgroundType: HeroBackgroundType = 'image';
    size: HeroSize = 'medium';
    fullScreen = false;
    imageSrc = 'https://example.com/hero-image.jpg';
    imageAlt = 'Mountain range during sunrise';
    videoSrc = '';
    videoPoster = '';
}

describe('HeroComponent', () => {
    let fixture: ComponentFixture<TestHostComponent>;
    let host: TestHostComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TestHostComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(TestHostComponent);
        host = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        const component = fixture.debugElement.children[0].componentInstance as HeroComponent;

        expect(component).toBeTruthy();
    });

    it('should render projected content', () => {
        fixture.detectChanges();

        const element = fixture.nativeElement as HTMLElement;

        expect(element.querySelector('.hero-content h1')?.textContent).toContain('Hero Headline');
        expect(element.querySelector('.hero-content p')?.textContent).toContain('Hero supporting text.');
    });

    it('should render an image background when image mode is used', () => {
        host.backgroundType = 'image';
        host.videoSrc = '';

        fixture.detectChanges();

        const element = fixture.nativeElement as HTMLElement;

        expect(element.querySelector('.hero-image')).not.toBeNull();
        expect(element.querySelector('.hero-video')).toBeNull();
    });

    it('should render a video background when video mode has a source', () => {
        const heroFixture = TestBed.createComponent(HeroComponent);
        heroFixture.componentRef.setInput('backgroundType', 'video');
        heroFixture.componentRef.setInput('videoSrc', 'https://example.com/hero-video.mp4');
        heroFixture.componentRef.setInput('imageSrc', '');

        heroFixture.detectChanges();

        const component = heroFixture.componentInstance;
        const element = heroFixture.nativeElement as HTMLElement;

        expect(component.showVideoBackground()).toBe(true);
        expect(element.querySelector('.hero-video')).not.toBeNull();
        expect(element.querySelector('.hero-image')).toBeNull();
    });

    it('should apply fullscreen class when enabled', () => {
        const heroFixture = TestBed.createComponent(HeroComponent);
        heroFixture.componentRef.setInput('fullScreen', true);

        heroFixture.detectChanges();

        const component = heroFixture.componentInstance;
        const element = heroFixture.nativeElement as HTMLElement;

        expect(component.fullScreen()).toBe(true);
        expect(component.heroClass()).toContain('is-fullscreen');
        expect(element.querySelector('.hero.is-fullscreen')).not.toBeNull();
    });
});