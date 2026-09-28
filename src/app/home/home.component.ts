// src/app/home/home.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class HomeComponent implements OnInit {
  sparkles: { top: string; left: string; delay: string; size: string }[] = [];
  
  skills = [
    {
      icon: 'fab fa-js',
      title: 'JavaScript',
      description: 'Creating interactive and dynamic web experiences with modern JavaScript'
    },
    {
      icon: 'fab fa-angular',
      title: 'Angular',
      description: 'Building powerful single-page applications with Angular framework'
    },
    {
      icon: 'fab fa-html5',
      title: 'HTML5 & CSS3',
      description: 'Crafting beautiful and responsive layouts with modern web standards'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating websites that work beautifully on all devices and screen sizes'
    }
  ];

  projects = [
    {
      title: 'Enchanted Portfolio',
      description: 'A magical portfolio website with fairy tale theme',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop',
      link: '/projects'
    },
    {
      title: 'Mystical Dashboard',
      description: 'An interactive dashboard with magical data visualizations',
      image: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=2070&auto=format&fit=crop',
      link: '/projects'
    }
  ];

  ngOnInit(): void {
    this.createSparkles();
    this.animateText();
  }

  createSparkles(): void {
    for (let i = 0; i < 20; i++) {
      this.sparkles.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 5}s`,
        size: `${Math.random() * 6 + 3}px`
      });
    }
  }

  animateText(): void {
    setTimeout(() => {
      const heroText = document.querySelector('.hero-text h1');
      if (heroText) {
        heroText.classList.add('animated');
      }
    }, 500);
  }
}
