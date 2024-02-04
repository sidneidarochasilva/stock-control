import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { GetAllProductsResponse } from 'src/app/models/interfaces/products/response/GetAllProductsResponse';
import { ProductsService } from 'src/app/services/products/products.service';
import { ProductsDataTransferService } from 'src/app/shared/products/products-data-transfer.service';

@Component({
  selector: 'app-products-home',
  templateUrl: './products-home.component.html',

})
export class ProductsHomeComponent implements OnDestroy, OnInit {
  private readonly destroy$: Subject<void> = new Subject();
  public productsDatas: Array<GetAllProductsResponse> = [];

  constructor(
    private productsService: ProductsService,
    private productsDtService: ProductsDataTransferService,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getServiceProductsData();
  }
  getServiceProductsData() {
    const productsLoaded = this.productsDtService.getProductsDatas();

    if (productsLoaded.length > 0) {
      this.productsDatas = productsLoaded;
      console.log("products1", this.productsDatas)
    } else {
      this.getAPIProductsDatas();
    }

  }
  getAPIProductsDatas() {
    this.productsService.getAllProducts()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.productsDatas = response;

          console.log("products2", this.productsDatas)
          }
        },
        error: (err) => {
          console.log(err);
          this.router.navigate(['/dashboard/products']);

          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar produtos',
            life: 2000
          })

        }
      }
      )
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
