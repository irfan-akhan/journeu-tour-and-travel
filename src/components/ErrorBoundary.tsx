"use client";

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // You can also log to an error reporting service here
    // logErrorToService(error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl w-full"
          >
            <Card className="p-8 md:p-12 shadow-2xl border-0">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center"
              >
                <AlertTriangle className="w-10 h-10 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-ubuntu font-bold text-center mb-4 text-gray-900"
              >
                Oops! Something Went Wrong
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-center mb-8 text-lg"
              >
                We encountered an unexpected error. Don't worry, our team has been notified and we're working on it.
              </motion.p>

              {/* Error Details (Development Mode) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-8 p-6 bg-gray-100 rounded-xl overflow-auto max-h-60"
                >
                  <p className="text-sm font-semibold text-red-600 mb-2">
                    Error: {this.state.error.message}
                  </p>
                  {this.state.errorInfo && (
                    <pre className="text-xs text-gray-700 overflow-auto">
                      {this.state.errorInfo.componentStack}
                    </pre>
                  )}
                </motion.div>
              )}

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  onClick={this.handleReset}
                  size="lg"
                  className="bg-gradient-to-r from-[#1BA5B8] to-[#0A4D5C] hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <RefreshCcw className="w-5 h-5" />
                  Try Again
                </Button>
                
                <Button
                  onClick={this.handleGoHome}
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2 border-2"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </Button>
              </motion.div>

              {/* Additional Help */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 pt-8 border-t text-center"
              >
                <p className="text-sm text-gray-600 mb-3">
                  Need immediate assistance?
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <a
                    href="tel:+916005571959"
                    className="text-[#1BA5B8] hover:underline font-medium"
                  >
                    📞 Call Support
                  </a>
                  <a
                    href="mailto:support@journeu.com"
                    className="text-[#1BA5B8] hover:underline font-medium"
                  >
                    ✉️ Email Us
                  </a>
                  <a
                    href="/contact"
                    className="text-[#1BA5B8] hover:underline font-medium"
                  >
                    💬 Contact Form
                  </a>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Simple wrapper component for easier usage
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<Props, 'children'>
) {
  return function WithErrorBoundaryWrapper(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}
