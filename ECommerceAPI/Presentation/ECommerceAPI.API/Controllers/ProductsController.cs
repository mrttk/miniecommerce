using EcommerceAPI.Domain.Entities;
using ECommerceAPI.Application.Abstractions;
using ECommerceAPI.Application.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductReadRepository _productReadRepository;
        private readonly IProductWriteRepository _productWriteRepository;

        public ProductsController(IProductWriteRepository productWriteRepository, IProductReadRepository productReadRepository)
        {
            _productWriteRepository = productWriteRepository;
            _productReadRepository = productReadRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {

            //await _productWriteRepository.AddRangeAsync(new()
            //{
            //    new() {Id = Guid.NewGuid(), Name = "Product 1", Price = 100,CreatedDate = DateTime.UtcNow, Stock = 10},
            //    new() {Id = Guid.NewGuid(), Name = "Product 2", Price = 200,CreatedDate = DateTime.UtcNow, Stock = 20},
            //    new() {Id = Guid.NewGuid(), Name = "Product 3", Price = 300,CreatedDate = DateTime.UtcNow, Stock = 30},
            //});
            //await _productWriteRepository.AddAsync(new() { Name = "Test Product", Price = 150, Stock = 15 });
            //await _productWriteRepository.SaveAsync();
            return Ok("Merhaba");
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIdAsync(id);
            return Ok(product);
        }
    }
}
