using ECommerceAPI.Application.ViewModels.Products;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ECommerceAPI.Application.Validators.Products
{
    public class CreateProductValidator : AbstractValidator<VM_Create_Product>
    {
        public CreateProductValidator()
        {
            RuleFor(p => p.Name)
                .NotEmpty()
                .NotNull()
                .WithMessage("Product name cannot be empty.")
                .MaximumLength(150)
                .MinimumLength(2)
                .WithMessage("Product name must be between 2 and 150 characters.");

            RuleFor(p => p.Stock)
                .NotEmpty()
                .NotNull()
                .WithMessage("Stock value cannot be empty.")
                .Must(s => s >= 0)
                .WithMessage("Stock value cannot be negative.");

            RuleFor(p => p.Price)
                .NotEmpty()
                .NotNull()
                .WithMessage("Price value cannot be empty.")
                .Must(s => s >= 0)
                .WithMessage("Price value cannot be negative.");
        }
    }
}
