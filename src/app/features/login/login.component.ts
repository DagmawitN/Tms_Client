import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  email = '';
  password = '';
  isSubmitting = signal(false);
  errorMessage = signal<string | null>(null);

  async submit(): Promise<void> {
    if (!this.email.trim() || !this.password || this.isSubmitting()) {
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    try {
      await this.auth.login({
        email: this.email.trim(),
        password: this.password,
      });
      await this.router.navigate(['/dashboard']);
    } catch {
      this.errorMessage.set('Invalid email or password. Please try again.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}