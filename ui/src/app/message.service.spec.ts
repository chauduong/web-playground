import { inject, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Http, ConnectionBackend, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';

import { HeroService } from '../app/hero.service';

describe('TestMessageService in ./src folder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        HeroService,
        { provide: Http,
          useFactory: (backend: ConnectionBackend,
              defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
              }, deps: [MockBackend, BaseRequestOptions] },
    ] });
  });

  /*
  describe('getMessage', () => {
    it('retrieves using the track ID',
      inject([HeroService, MockBackend], fakeAsync((heroService, mockBackend\ )=>{
        var res; mockBackend.connections.subscribe(c => {
          expect(c.request.url).toBe('http://localhost:9000/api/messages'); 
          let response = new ResponseOptions({body: '{"message": "message1"}'}); 
          c.mockRespond(new Response(response));
        });
        heroService.getHeroes().subscribe((_res) => {
          res = _res;
        });
        tick();
        expect(res.message).toBe('message1');
      }))
    ); 
  });   
  */
   
});
