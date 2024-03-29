import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

import { HomeComponent } from '../screens/home/home.component';
import { GptwComponent } from '../screens/gptw/gptw.component';
import { StibaComponent } from '../screens/stiba/stiba.component';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([
          { path: '', component: HomeComponent },
          { path: 'gptw', component: GptwComponent },
          { path: 'stiba', component: StibaComponent }
        ])
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve navegar para a rota de início ("/") quando o link Início é clicado', () => {
    const href = fixture.debugElement.query(By.css('a[routerLink="/"]')).nativeElement.getAttribute('href');
    expect(href).toEqual('/');
  });

  it('deve navegar para "gptw" quando o link GPTW é clicado', () => {
    const href = fixture.debugElement.query(By.css('a[routerLink="/gptw"]')).nativeElement.getAttribute('href');
    expect(href).toEqual('/gptw');
  });
  
  it('deve navegar para "stiba" quando o link Stiba é clicado', () => {
    const href = fixture.debugElement.query(By.css('a[routerLink="/stiba"]')).nativeElement.getAttribute('href');
    expect(href).toEqual('/stiba');
  });
});
